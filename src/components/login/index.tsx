import { StatusBar } from 'expo-status-bar';
import {
    useState,
    useContext,
    useEffect
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Vibration,
    Image,
    TouchableOpacity
} from 'react-native';
import {
    FontAwesome,
    Entypo,
    AntDesign,
    FontAwesome6 
} from '@expo/vector-icons'

import styles from './styles';

interface logoImage {
    logo?: any
}




export default function Main(props: logoImage) {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);



    const login = () => {

        if (email == null || password == null) {

            Vibration.vibrate()
            setErrorMsg("Campos Obrigatorio (*)")
            return
        }

        setErrorMsg(null)
        setEmail(null)
        setPassword(null)
        alert("logando...")
        return
    }

    return (

        <View>
            <View style={styles.containeLogo}>
                <Image
                    style={styles.logo}
                    source={props.logo}
                />
            </View>

            {/*  E-MAIL */}
            <Text style={styles.labelInput} >
                <Entypo name='mail' size={17} /> E-mail
            </Text>
            {errorMsg && <Text style={styles.textoAviso} >{errorMsg}</Text>}
            <TextInput
                style={styles.input}
                value={email}
                placeholder={"Ex:. mail@domain.com"}
                onChangeText={setEmail}
            />
            {/*  PASSWORD */}
            <Text style={styles.labelInput} >
                <FontAwesome6 name="unlock-keyhole" size={17}  /> Password
            </Text>
            {errorMsg && <Text style={styles.textoAviso} >{errorMsg}</Text>}
            <TextInput
                style={styles.input}
                value={password}
                placeholder={"Ex:. xxxxxxxx"}
                onChangeText={setPassword}
            />
            {/*  BTN Login */}
            <Text style={styles.textoJustificado}  >Registar</Text>
            <TouchableOpacity
                onPress={() => login()}
                style={styles.botaoAcesso}
            >
                {/* icons  */}
                <Entypo name='login' size={20} color="#FFF" />
                {/* <Text style={styles.labelBotaoAcesso}  > Login</Text> */}
            </TouchableOpacity>
        </View>
    )
}

