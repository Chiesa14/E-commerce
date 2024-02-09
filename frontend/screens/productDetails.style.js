import { StyleSheet } from "react-native";
import {COLORS, SIZES} from "../constants"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.lightWhite
    },
    upperRow:{
        marginHorizontal:20,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        position:"absolute",
        top:SIZES.xxLarge,
        width:SIZES.width -44,
        zIndex:999,
    },
    image:{
        aspectRatio:1,
        resizeMode:"cover",
    },
    details:{
        marginTop:-SIZES.large,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
    },
    cartRow:{
        paddingBottom:SIZES.small,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        width: SIZES.width,
        
    },
    cartBtn:{
        width: SIZES.width*0.7,
        backgroundColor:COLORS.black,
        padding: SIZES.small/2,
        borderRadius: SIZES.large,
        marginLeft:12,
    },
    addToCart:{
        width:37,
        height:37,
        borderRadius:50,
        margin:SIZES.small,
        backgroundColor:COLORS.black,
        alignItems:"center",
        justifyContent:"center"
    },
    titleRow:{
        marginHorizontal: 20,
        paddingBottom:SIZES.small,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        width: SIZES.width -44,
        top: 20
    },
    ratingRow:{
        paddingBottom:SIZES.small,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        width: SIZES.width -10,
        top: 5
    },
    title:{
        fontWeight:"900",
        fontSize : SIZES.large,
    },
    cartText:{
        fontWeight:"500",
        fontSize : SIZES.large,
        color: COLORS.lightWhite
    },
    price:{
        paddingHorizontal:10,
        fontWeight:"bold",
        fontSize : SIZES.large,
    },
    priceWrapper:{
        backgroundColor:COLORS.secondary,
        borderRadius: SIZES.large,
    },
    rating:{
        top: SIZES.large,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems: "center",
        marginHorizontal:SIZES.large,
    },
    ratingText:{
        color: COLORS.gray,
        fontWeight:"bold",
        paddingHorizontal:SIZES.xSmall
    },
    descriptionWrapper:{
        marginTop:SIZES.large*2,
        marginHorizontal:SIZES.large,
    },
    description:{
        fontWeight:"600",
        fontSize:SIZES.large-2,
    },
    descText:{
        fontSize: SIZES.small,
        textAlign:"justify",
        marginBottom:SIZES.small,
    },
    location:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        backgroundColor: COLORS.secondary,
        marginHorizontal:12,
        padding:5,
        borderRadius: SIZES.large
    },
})

export default styles