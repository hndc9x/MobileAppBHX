import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    header:{
        width: '100%' ,
        height: '100%' ,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent : 'center',
    },
    headerText: {
        fontWeight:'bold',
        fontSize:20,
        color: '#333',
        letterSpacing:1
    },
    icon:{
        position: 'absolute',
        left : -80
    },
    menuText:{
        position: 'absolute',
        left: -80,
        top : 42,
        color: 'yellow',
        fontWeight : 'bold',
        fontSize: 10
    }
});

export default styles;