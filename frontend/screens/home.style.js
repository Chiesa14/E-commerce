import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants";

const styles = StyleSheet.create({
    textStyle: {
        fontWeight:"bold",
        fontSize: "40",
    },
    appWrapper:{
        marginHorizontal:22,
        marginTop:SIZES.small
    },
    appBar:{
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center"
    },
    location: {
        fontWeight:'bold',
        fontSize: SIZES.medium,
        color: COLORS.gray
    },
    cartCount:{
        position: "absolute",
        bottom:16,
        width:16,
        height:16,
        borderRadius:8,
        alignItems:"center",
        backgroundColor:"green",
        justifyContent: "center",
        zIndex: 999
    },
    cartNumber:{
        fontWeight:"600",
        fontSize:10,
        color: COLORS.lightWhite
    }

})

export default styles