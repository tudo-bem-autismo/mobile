import Toast from "react-native-toast-message";

export const showErrorToast = (message) => {

    Toast.show({
        type: 'error',
        text1: message
    })
}