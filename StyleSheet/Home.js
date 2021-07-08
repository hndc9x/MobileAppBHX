import {StyleSheet} from "react-native"
import { block } from "react-native-reanimated";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#a4a6a8",
        marginTop: 5
    },
    view:{
        backgroundColor: "white",
        height:70,
        display: "flex",
        flexDirection: "row",
        flex : 0.15
    },
    promotion:{
        backgroundColor : "#fff",
    }, 
    title:{
        fontSize: 15,
        fontWeight: "bold",
        flexDirection : "row",
    },
    cloded:{
        fontSize: 15,
        textAlign: "right",
        marginLeft: 160
    }
});

export default styles