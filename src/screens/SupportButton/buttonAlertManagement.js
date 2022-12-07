
import React, { useEffect, useState, useRef } from 'react';
import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { COLORS, FONTS } from '../../assets/const';
import { deleteMidiaButtonSupport, getButtonSupportDependent,} from '../../services';
import { MainHeader } from '../../components/Header/MainHeader';
import { Video, AVPlaybackStatus  } from 'expo-av';
import { Loading } from '../Loading';
import { Dependent } from "../../components/DependentListing/Dependent";
import styles from './style';
import { ModalButtonSuportImage, ModalDeleteData, ModalViewButtonSuport }  from '../../components';
import { FontAwesome } from '@expo/vector-icons';
import Toast from "react-native-toast-message";

export const SupportButtonManagement = ({ navigation }) => {

    const [modal, setModal] = useState(false);

    const [modalDelete, setModalDelete] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const [dependents, setDependents] = useState([]);

    const [idMidia, setIdMidia] = useState(0);

    const [idVideo, setIdVideo] = useState(0);

    const [image1, setImage1] = useState('');

    const [image, setImage] = useState([]);

    const [video, setVideo] = useState([]);

    const videoR = useRef(null);
    const [status, setStatus] = useState({});

    const deleteVideo = async (id) => {

    setModalDelete(false)

    const result = await deleteMidiaButtonSupport(id)

    if (result.success) {
        return Toast.show({
            type: 'success',
            text1: 'Vídeo deletado com sucesso',
        });
    }
       
    
    }

    const getDependents = async () => {
        const result = await getButtonSupportDependent()
        const file = result.data
        
        const images = file.filter(item => item.tipoMidia === 'Imagens')
        setImage(images)

        const videos = file.filter(item => item.tipoMidia === 'Vídeos')
        setVideo(videos)

    }

    const getImage = (image, id) => {
        setImage1(image)
        setIdMidia(id)
        setModal(true)
    }

    const getVideo = (id) => {
        
        setIdVideo(id)
        
    }

    useEffect(() => {
        getDependents()
        setIsLoading(false)
    }, [])

    return (

        <View style={styles.container}>
             {isLoading ? (
                <Loading />
            ) : (
                <>
                    <MainHeader
                        screenName="BOTÃO DE APOIO"
                        navigation={navigation}
                    />

                    <View style={styles.gamesContainer}>

                        <Text style={styles.textSelectGame}>
                        gerencie os alertas das suas crianças
                        </Text>

                        <Text style={{fontSize: 18, marginBottom: 10, fontStyle: 'bold', left: '-35%'}}>IMAGENS</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}
                            contentContainerStyle={{justifyContent : 'center', alignItems: 'center', padding: 15, }}
                            >

                            {
                                image.map(item => (        
                                    
                                    <TouchableOpacity key={item.id} style={{alignItems: 'center', justifyContent: 'center', marginRight: 20, }}
                                    onPress={() => getImage(item.midia,item.id)}>
                                        <Image source={{uri: item.midia}} style={{width: 300, height: 240}}/>
                                        
                                    </TouchableOpacity>
                                    
                                    
                                ))
                            }
                          </ScrollView>
                        
                          <Text style={{fontSize: 18, marginBottom: 10, fontStyle: 'bold', left: '-35%'}}>VÍDEOS</Text>
                          <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    pagingEnabled={true}
                                    contentContainerStyle={{justifyContent : 'center', alignItems: 'center', padding: 15,}}
                                    style={{marginVertical: 0}}
                                    >
                            {
                                video.map(item => (        
                                    <View key={item.id} style={{backgroundColor: COLORS.black, alignItems: 'center', marginRight: 20}}>
                                        <Video
                                        ref={videoR}
                                        useNativeControls
                                        source={{uri: item.midia}} style={{width: 200, height: 200}}
                                        resizeMode="contain"
                                        isLooping
                                        onPlaybackStatusUpdate={status => setStatus(() => status)}/>
                                        <TouchableOpacity
                                            onPress={() => status.isPlaying ? videoR.current.pauseAsync() : video.current.playAsync()}
                                            >
                                            <TouchableOpacity onPress={() => {setModalDelete(true); getVideo(item.id)}}>
                                            <FontAwesome style={{fontSize: 24, color: COLORS.white}} name="trash"/>
                                            </TouchableOpacity>
                                            
                                        </TouchableOpacity>
                                        


                                    
                                    
                                </View>
                                
                                    
                                ))
                            }
                          </ScrollView>


                       


                    </View>
                    
                    {modal && (
                        <ModalButtonSuportImage
                        close={() => setModal(false)}
                        midia={image1}
                        idImg={idMidia}
                        show={modal}
                        />
                    )}

            {modalDelete && (
                  <View style={style.modalContainer}>
                    <ModalDeleteData
                      label="Tem certeza que quer excluir o vídeo?"
                      close={() => setModalDelete(false)}
                      show={modalDelete}
                      del={() => deleteVideo(idVideo)}
                      //navigation={navigation}
                    />
                  </View>
                )}

                </>
            )}
        </View>



    );
}

const bottomShadow = {
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
}

const style = StyleSheet.create({
    buttonContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    button: {
        width: 200,
        height: 40,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        ...bottomShadow

    },
    textButton: {
        fontFamily: FONTS.title,
        textAlign: 'center',
    },
    text: {
        marginTop: 30,
    },
    modalContainer: {
        position: "absolute",
        justifyContent: "flex-end",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 5,
      },
});
