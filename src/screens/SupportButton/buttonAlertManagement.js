
import React, { useEffect, useState, useRef } from 'react';
import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { COLORS, FONTS } from '../../assets/const';
import { getButtonSupportDependent,} from '../../services';
import { MainHeader } from '../../components/Header/MainHeader';
import { Video, AVPlaybackStatus  } from 'expo-av';
import { Loading } from '../Loading';
import { Dependent } from "../../components/DependentListing/Dependent";
import styles from './style';
import { ModalButtonSuport }  from '../../components';
import ImageViewer from 'react-native-image-zoom-viewer';
import { FontAwesome } from '@expo/vector-icons';

export const SupportButtonManagement = ({ navigation }) => {

    const [modal, setModal] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const [dependents, setDependents] = useState([]);

    const [idDependents, setIdDependents] = useState(0);

    const [image, setImage] = useState([]);

    const [video, setVideo] = useState([]);

    const videoR = useRef(null);
    const [status, setStatus] = useState({});

    const getDependents = async () => {
        const result = await getButtonSupportDependent()
        const file = result.data

        const images = file.filter(item => item.tipoMidia === 'Imagens')
        setImage(images)
        console.log(images)

        const videos = file.filter(item => item.tipoMidia === 'Vídeos')
        setVideo(videos)

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
                        <Text style={{color: COLORS.black, fontSize: 26, }}>FOTOS</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}
                            contentContainerStyle={{flexGrow : 1, justifyContent : 'center', alignItems: 'center', padding: 15}}
                            style={{marginVertical: 50}}
                            >

                            {
                                image.map(item => (        
                                    
                                    <View key={item.id} style={{alignItems: 'center', justifyContent: 'center', marginRight: 20, }}>
                                        <Image  source={{uri: item.midia}} style={{width: 300, height: 300}}/>
                                        
                                            
                                        
                                    </View>
                                    
                                ))
                            }
                          </ScrollView>

                          <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    pagingEnabled={true}
                                    contentContainerStyle={{flexGrow : 1, justifyContent : 'center', alignItems: 'center', padding: 15}}
                                    style={{marginVertical: 50}}
                                    >
                            {
                                video.map(item => (        
                                    <View key={item.id} style={{backgroundColor: COLORS.black, alignItems: 'center', justifyContent: 'center', marginRight: 20}}>
                                        <Video
                                            ref={videoR}
                                            useNativeControls
                                            source={{uri: item.midia}} style={{width: 300, height: 300}}
                                            resizeMode="contain"
                                            isLooping
                                            onPlaybackStatusUpdate={status => setStatus(() => status)}/>
                                        <TouchableOpacity
                                            onPress={() => status.isPlaying ? videoR.current.pauseAsync() : video.current.playAsync()}
                                            >
                                            <Text>{status.isPlaying ? 'Pause' : 'Play'}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    
                                ))
                            }
                          </ScrollView>


                       


                    </View>
                    
                    {modal && (
                        <ModalButtonSuport
                        close={() => setModal(false)}
                        idCrianca={idDependents}
                        show={modal}
                        />
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
    }
});
