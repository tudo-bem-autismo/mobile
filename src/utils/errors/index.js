import Toast from "react-native-toast-message"

export const showToast = (message) => {

    Toast.show({
        type: 'error',
        text1: message
    })
}