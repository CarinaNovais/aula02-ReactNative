import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button} from 'react-native';
import Constants from 'expo-constants';


// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    <Card style= {styles.caixa2}>
    <Image style={styles.logo} source={require('./assets/snack-icon.png')} 
    />
    <Text style={styles.paragraph}>USUÁRIO:</Text>
      <TextInput style={styles.caixatxt}
      placeholder="Usuário"/>
      <Text style={styles.paragraph}>SENHA:</Text>
      <TextInput style={styles.caixatxt} secureTextEntry={true} 
      placeholder="Senha"/>

      <View style={styles.botao}>
      <Button 
      title='entrar'/>
      </View>
      
       <View style={styles.botao}>
      <Button 
      title='registrar'/>
      </View>
      

    </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#fff'
  

  },
  paragraph: {
    textTransform: "uppercase",
    color: '#272838',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft:25,
    marginTop:15
  },
  caixatxt:{
    height:30,
    margin:12,
    borderWidth:1,
    padding:10,
    backgroundColor:'#fff'
  
  },
  caixa2:{
    borderWidth:1,
    borderColor:'#000',
    backgroundColor:'#CDEDFD'

  },
  botao:{
    margin:20
  },

  logo:{
    height:128,
    width:128,
    alignSelf:'center',
    marginTop: 30

  },
  teste:{
    height:20
  }

});
