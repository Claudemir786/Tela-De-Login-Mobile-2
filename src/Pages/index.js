import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Cabecalho from '../Components/Header';
import Zocial from '@expo/vector-icons/Zocial';

export default function App() {
  return (
    
    <View style={styles.container}>
     <Cabecalho/>
     <View style={styles.corpo}>
        <View style={styles.containerInput} >
         
            <TextInput placeholder='Email address:' placeholderTextColor="#90959B" style={styles.input} />
            <TextInput placeholder='Password:'  placeholderTextColor="#90959B" secureTextEntry={true} style={styles.input} />

        </View>
        <View style={styles.botao}>
            <TouchableOpacity style={styles.touch}>
                <Text style={styles.texto}>Sing in</Text>
            </TouchableOpacity>
        </View>       
       
           
  </View>
   <View style={styles.rodape}>
            <Text style={styles.textoRodape}>Add DashPress to Your Site</Text>
        </View>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252F39',
    alignItems: 'center',
    justifyContent: 'center',
  },

  corpo:{
   flex:2,
   marginTop:50,   
  },
  containerInput:{
    width:300,
    justifyContent:"center",    

  },
  input:{
    borderBottomWidth:1,
    borderColor:'#90959B',
    height:70,
    fontSize:17,   

  },
  botao:{
    marginTop:50,    
  
  },
  touch:{
    backgroundColor:'#1C9EB4',
    borderRadius:3,
    width:300,
    alignItems:'center',
    height:60,
    justifyContent:'center',
  },
  texto:{
    color:'#90959B',
    fontSize:20,
  },
  textoRodape:{
    color:'#90959B',
    fontSize:17,   

  },
  rodape:{
    flex:1,
    flexDirection:'row',           
    backgroundColor:"#1D262D",
    marginTop:100,
    alignItems:'center',
    width:500,
    justifyContent:"center",
    

  }



});
