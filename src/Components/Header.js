import {Text, View, StyleSheet} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Cabecalho(){
    return(
        <View style={styles.container}>
            <Text style={styles.icone}><Ionicons name="logo-edge" size={80} color="#1C9EB4" /></Text>
            <Text style={styles.texto}>Dashpress</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:30,
        marginTop:140,
        alignItems:'center',
    },
    icone:{
        marginBottom:10,

    },
    texto:{
        fontSize:50,
        color:'#fff',
        
    }
})