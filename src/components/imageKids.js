import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import COLORS from "../assets/const/colors";
import backgroundFriends from "../assets/images/backFriends.png"

const ImgBackgroundFriends = () => {
    
    return(

            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={backgroundFriends}>
                </Image>
                
            </View>
                    
        
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
      },
      image: {
        width: 365,
        height: 150,
        marginVertical: 15
        
      },
});

export default ImgBackgroundFriends;