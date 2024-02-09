import { StyleSheet } from "react-native"
import { COLORS,SIZES } from "../../constants"
import { Colors } from "react-native/Libraries/NewAppScreen"

const styles =  StyleSheet.create({
    container:{
        marginTop: SIZES.medium,
        marginHorizontal: 20,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTitle:{
        fontWeight:'bold',
        fontSize: SIZES.xLarge,
    },
})

export default styles