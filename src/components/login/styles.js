
import { StyleSheet  } from "react-native";


 const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 300,
        marginBottom: 10,
        borderWidth: 1,
        borderColor:"#3498DB",
        padding: 10,
        borderRadius: 7
    },
    bottom: {
        marginTop: 6,
        borderRadius: 9
    },
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain', // Adjust this as needed
    },
    containeLogo:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:5
    },
    textoJustificado:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        padding:12,
        fontWeight:"bold",
        color:"#3498DB"

    },
    labelInput:{
        fontWeight:"bold",
        padding:4,
        color:"#3498DB"
    },
    botaoAcesso:{
     
        marginBottom: 10,
        backgroundColor:"#3498DB",
        padding: 10,
        borderRadius: 7,
        alignItems: "center",
        justifyContent:"center"
        
    },
    labelBotaoAcesso:{
        textAlign: "center",
        fontWeight:"bold",
        color:"#F7F9F9",
    },
    textoAviso:{
        padding:2,
        // marginBottom:2,
        fontWeight:"bold",
        fontSize:12,
        color:"red"
        
    }
});

export default styles;