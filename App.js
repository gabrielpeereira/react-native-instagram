/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const width = Dimensions.get('screen').width;

class App extends Component{
  render(){
    const fotos = [{id: 1, usuario: 'Gabriel'},
                   {id: 2, usuario: 'Maria'},
                   {id: 3, usuario: 'Olegario'}];
    return (

      <FlatList style={styles.container}
        keyExtractor={item => item.id.toString()}
        data={fotos}
        renderItem={({item}) =>
        <View>
        <View style={styles.cabecalho}>
          <Image source={require('./resources/img/javascriptcover.jpeg')}
          style={styles.fotoDePerfil}/>
            <Text>{item.usuario}</Text>
        </View>
          <Image source={require('./resources/img/javascriptcover.jpeg')}
        style={styles.foto}/>
      </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },

  cabecalho: {
    margin: 10, 
    flexDirection: 'row', 
    alignItems: 'center'
  },

  fotoDePerfil: {marginRight: 10, 
    borderRadius: 20, 
    width: 40, 
    height: 40
  },

  foto: {
    width: width, 
    height: width
  }
})



export default App;
