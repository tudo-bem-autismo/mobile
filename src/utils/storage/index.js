import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeId = async (id) => {
    try {
        await AsyncStorage.setItem('@id', JSON.stringify(id))
    } catch (error) {
        console.log(error)
    }
}

export const getId = async () => {
    try {

        const id = await AsyncStorage.getItem('@id')

        return id

    } catch (error) {
        console.log(error)
    }
} 