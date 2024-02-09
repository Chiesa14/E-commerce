import { StyleSheet } from "react-native"
import { COLORS,SIZES } from "../../constants"

const styles = StyleSheet.create({
    container:{
        width: '100%',
    },
    welcomeText:(color,top)=>({
        fontWeight: 'bold',
        fontSize:SIZES.xLarge +2,
        marginTop: top,
        color: color,
        marginHorizontal: SIZES.xSmall
    }),
    searchContainer:{
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        marginHorizontal: SIZES.medium,
        height: 50
    },
    searchIcon:{
        marginHorizontal:10,
        color: COLORS.gray, 
    },
    searchWrapper:{
        flex:1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small,
    },
    searchInput:{
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small,
    },
    searchBtn:{
        width:50,
        height: "100%",
        borderRadius:SIZES.medium,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: COLORS.primary,

    }
})

export default styles