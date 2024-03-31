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
    Image
} from 'react-native';

import styles from './styles';

interface logoImage {
    logo?: any
}




export default function Registar(props: logoImage) {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [nome, setNome] = useState(null);

    const registo = () => {

        if (email != null && password != null) {
            // alert("campos prenchidos")
            alert(email + " " + password)

            return
        }

        return alert("campos nao preenchidos")
    }

    return (

        <View>
            {/* LOGO */}
            <View style={styles.containeLogo}>
                <Image
                    style={styles.logo}
                    source={props.logo}
                />
            </View>

            {/* NOME */}
            <Text style={styles.labelInput} >Nome</Text>
            <TextInput
                style={styles.input}
                value={nome}
                placeholder=" ex:. mail@domain.com"
                onChangeText={setNome}
            />
              {/* EMAIL */}
              <Text style={styles.labelInput} >E-mail</Text>
            <TextInput
                style={styles.input}
                value={email}
                placeholder=" ex:. mail@domain.com"
                onChangeText={setEmail}
            />
            {/* PASSWORD */}
            <Text style={styles.labelInput}>Password</Text>
            <TextInput
                style={styles.input}
                value={password}
                placeholder="ex:. XXXXXXXX"
                onChangeText={setPassword}
            />
            {/* BOTAO */}
            <Button
                title="Registar"
                onPress={() => registo()}
                // color="#841584"
            />
        </View>
    )
}

