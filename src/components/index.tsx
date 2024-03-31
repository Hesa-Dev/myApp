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
    Button,
    Image,
    TouchableOpacity
} from 'react-native';

import styles from './styles';

interface logoImage {
    logo?: any
}




export default function Main(props: logoImage) {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const login = () => {

        if (email != null && password != null) {
            // alert("campos prenchidos")
            alert(email + " " + password)

            return
        }

        return alert("campos nao preenchidos")
    }

    return (

        <View>
            <View style={styles.containeLogo}>
                <Image
                    style={styles.logo}
                    source={props.logo}
                />
            </View>

            <Text style={styles.labelInput} >E-mail</Text>
            <TextInput
                style={styles.input}
                value={email}
                placeholder=" ex:. mail@domain.com"
                onChangeText={setEmail}
            // onChangeText={(e) => setEmail(e.targe)}
            />
            <Text style={styles.labelInput}>Password</Text>
            <TextInput
                style={styles.input}
                value={password}
                placeholder="ex:. XXXXXXXX"
                onChangeText={setPassword}
            />
            <Text style={styles.textoJustificado}  >Registar</Text>

            <TouchableOpacity
                onPress={() => login()}
                style={styles.botaoAcesso}
            >
                <Text style={styles.labelBotaoAcesso}  > Login</Text>
            </TouchableOpacity>
           
        </View>
    )
}

