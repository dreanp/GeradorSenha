import React, { useState } from 'react';
import { View,Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import slider from '@react-native-community/slider';
import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function App(){
  const[password, setPassword] = useState('');
  const [size, setSize] = useState(10);


  function gerarSenha(){
    let pass = '';
    for(let i = 0, n = charset.length; i < size; i++){
      pass += charset.charAt(Math.floor(Math.random() * n))
    }
    setPassword(pass);
  }

  function copiarSenha(){
    Clipboard.setString(password);
    alert('Senha copiada com sucesso') 
  }

  return(
    <View style={styles.container}>   
    <Image
      source={require('./src/assets/logo.png')}  
      style={styles.logo}     
    />
      <Text style={styles.title}>{size} Caracteres</Text> 
      
      <View style={styles.area}>
        <Slider
          style={{ height: 50}}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#00C18A"
          maximumTrackTintColor="violet"
          value={size}
          onValueChange={ (valor) => setSize(valor.toFixed(0)) }           
          />   
               
      </View>

      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

        {password !== '' && (
        <View style={styles.area}>
          <Text style={styles.password} onLongPress={copiarSenha} >{password}</Text>
        </View>
        )}     
      
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    width: 250,
    height: 250,
    marginBottom: 20
    
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold'
  },
  area:{
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 7,
    marginTop: 20
  },
  button:{
    backgroundColor: '#00C18A',
    width: '80%',
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 50,
    marginBottom: 25
  },
  buttonText:{
    fontSize:20,
    color: '#FFF',
    fontWeight: 'bold'
  },
  password:{
    padding: 10,
    textAlign: 'center',
    fontSize:25
  }    
});