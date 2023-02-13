import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, TouchableOpacity, Alert, Keyboard,Modal } from 'react-native';
import Entrar from './src/Entrar'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      modalVisible:false,
      prcGasolina:"0",
      prcAlcool:"0",
      textoFrase:'A vida trará coisas boas se tiver paciência.',
    }

    this.gasolinaoualcool = this.gasolinaoualcool.bind(this);
    this.ocultaModal = this.ocultaModal.bind(this);
  }


  dimissKeyboard(){
    Keyboard.dismiss();
  }

  ocultaModal(){
    this.setState({modalVisible: false,

    });
  }

  gasolinaoualcool(){

    if(this.state.prcGasolina==''){
      alert("Informe o preço da Gasolina!");
      return;    
    }
    if(this.state.prcAlcool==''){
      alert("Informe o preço do Álcool!");
      return;    
    }
    

    let result=0;
    let alcool = parseFloat(this.state.prcAlcool.replace(",","."));
    let gasolina = parseFloat(this.state.prcGasolina.replace(",","."));
    //alert(alcool);
    //alert(gasolina);
    

    if (gasolina==0 || gasolina==NaN){
      alert("Informe o preço da Gasolina!")
      return;
    }
    if (alcool==0 || alcool==NaN){
      alert("Informe o preço do Álcool!")
      return;
    }
  
    result = alcool/gasolina;
    
   // alert(result);
    if(result<=0.7){
      this.setState({
        textoFrase:"Compensa abastecer com Álcool"
      })
    }
    else{
      this.setState({
        textoFrase:"Compensa abastecer com Gasolina"
      })
    }
    this.setState({modalVisible: true});

    //Math.floor(Math.random -10 );
   
  }

  render(){  
  return (
    <View style={styles.container}>

      <Image
         source={require('./src/logo.png')}
         style={styles.img}
         
      >
      </Image>
      <TouchableOpacity style={styles.botao} onPress={this.dimissKeyboard}>
        <View style={styles.btnArea}>
          <Text
            style={styles.btnTexto}
          >
            Ocultar Teclado</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.textoNome}>Gasolina Preço Por Litro:</Text>
        <TextInput style={styles.input}
            
            placeholder="Digite o preço por litro da gasolina"
            underlineColorAndroid="transparent"
            onChangeText={(texto) => this.setState({prcGasolina: texto})}
            keyboardType="numeric" // Deixando teclado apenas numerico]
      
        />
        <Text style={styles.textoNome}>Álcool Preço Por Litro:</Text>
        <TextInput style={styles.input}
            
            placeholder="Digite o preço por litro do álcool"
            underlineColorAndroid="transparent"
            onChangeText={(texto) => this.setState({prcAlcool: texto})}
            keyboardType="numeric" // Deixando teclado apenas numerico
         
        />
        <TouchableOpacity style={styles.botao} onPress={this.gasolinaoualcool}>
          <View style={styles.btnArea}>
            <Text
              style={styles.btnTexto}
            >
              Calcular</Text>
          </View>
        </TouchableOpacity>
        <Modal transparent={true} animationType="slide" visible={this.state.modalVisible}>
            <View style={{margin:15, flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Image
              source={require('./src/gas.png')}
              style={styles.img}   
            >
            </Image>

            <View style={{backgroundColor: 'blue', width:'100%', height: 350, 
                          borderRadius: 15}}>

              <Text style={{paddingTop: 15, color: '#FFF', fontSize: 28, textAlign:'center'}}>{this.state.textoFrase}</Text>
              <TouchableOpacity style={styles.btnModal} onPress={this.ocultaModal}>
                <View style={styles.btnArea}>
                  <Text
                    style={styles.btnTexto}
                  >
                    Calcular Novamente</Text>
                </View>
              </TouchableOpacity>
                  </View>
            </View>
        </Modal>



    </View>
  );
}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black'
  },
  botao:{
    width:250,
    height:50,
    alignItems:'center',
    borderWidth:2,
    borderColor:'#dd7b22',
    backgroundColor:'white',
    borderRadius:25,
    marginTop:50,
    margin:10,
    fontSize:20,
    padding:10,
  },
  btnArea:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  btnModal:{
    height:60,
    alignItems:'center',
    borderWidth:2,
    borderColor:'#dd7b22',
    backgroundColor:'white',
    borderRadius:25,
    marginTop:50,
    margin:10,
    fontSize:20,
    padding:10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  btnTexto:{
    fontSize:18,
    fontWeight:'bold',
    color:'#dd7b22',
    backgroundColor:'white'

  },
  textoFrase:{
    textAlign:'center',
    fontSize:30,
    color:'#dd7b22',
    margin:30,
    fontStyle:'italic'
},  
textoNome:{
  textAlign:'center',
  fontSize:20,
  color:'white',
  fontStyle:'italic',
  fontWeight:'bold'
},  
  textoFraseSemSorte:{
  textAlign:'center',
  fontSize:30,
  color:'red',
  margin:30,
  fontStyle:'italic'
},
  img:{
    height:200,
    width:200,
    alignItems:'center',
    alignContent:'center'
},
input:{
  borderWidth: 1,
  borderRadius: 4,
  borderColor: '#999999',
  backgroundColor: '#EEEEEE',
  color: '#000000',
  height: 38,
  padding: 10,
  marginBottom: 5,
  marginTop: 5,
  fontSize:15
},
  
})

export default App;

