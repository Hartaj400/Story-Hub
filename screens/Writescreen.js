import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default class Writescreen extends React.Component {
    constructor(){
        super()
        this.state={
            title:'',
            author:'',
            storytext:'',
        }
    }
    render(){
        return(
            <SafeAreaProvider>
            <View style={styles.container}>
                 <Header 
                    backgroundColor = {'pink'}
                    centerComponent = {{
                        text : 'Story Hub',
                        style : { color: 'black', fontSize: 30}
                    }}
                />
                <TextInput 
                    placeholder="Story Title"
                    style={styles.title}
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                   
                    placeholderTextColor='black'/>
            </View>
            </SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title:{
        height: 40,
        borderWidth: 2,
        marginTop: 40,
        margin: 10,
        color:'black',
        padding: 6,
  
    },
});