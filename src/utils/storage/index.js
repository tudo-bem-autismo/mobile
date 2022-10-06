import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeData = async (value, key) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.log(error)
    }
}

export const getData = async (key) => {
    try {

        const id = await AsyncStorage.getItem(key)

        return JSON.parse(id)

    } catch (error) {
        console.log(error)
    }
}

export const clearData = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (error) {
        console.log(error)
    }
}