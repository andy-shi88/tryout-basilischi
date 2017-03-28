import React, {Component} from 'react';
import {StyleSheet,
        View,
        Text,
        TouchableHighlight,
        Dimensions,
        Alert
      } from 'react-native';
//variables for post size
let PostWidth = Dimensions.get('window').width; //100% of window width
let PostHeight= Dimensions.get('window').height / 10; //10% of window height
var api = require('../api/JsonPlaceHolder');
/*
* @class: Containing every information for one post, including display format
*/
class Contact extends Component {
  //constructor: taking properties passed from Main.js
  constructor(props) {
    super(props);
    this.state = { //storing the properties of the post
      contact: this.props.contact
    };
  }
  //event listener
  btBack() {
    this.props.navigator.pop();
  }
  btEdit() {

  }
  btDelete(){
    api.deleteContact(this.state.contact);
    Alert.alert( 'Status',
                  'Post deleted!',
                  [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                  { cancelable: false });
    this.props.callback.updateContactList();
    this.props.navigator.pop();
  }
  //render
  render() {
    return(
        <View style={styles.container}>
          <View style={styles.head}>
            <Text style={styles.titleText}>First name: {this.state.contact.firstname}</Text>
          </View>
          <View style={styles.head}>
            <Text style={styles.titleText}>Last name: {this.state.contact.lastname}</Text>
          </View>
          <View style={styles.head}>
            <Text style={styles.titleText}>Phone: {this.state.contact.phone}</Text>
          </View>
          <View style={styles.head}>
            <Text style={styles.titleText}>Organization: {this.state.contact.organization}</Text>
          </View>
          <View style={styles.head}>
            <Text style={styles.titleText}>Adress: {this.state.contact.address}</Text>
          </View>
          <View style={styles.menu}>
            <TouchableHighlight underlayColor='#888888' onPress={this.btEdit.bind(this)} style={styles.button}>
              <Text style={styles.buttonText}> Edit </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#888888' onPress={this.btDelete.bind(this)} style={styles.button}>
              <Text style={styles.buttonText}> Delete </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.menu}>
          <TouchableHighlight underlayColor='#888888' onPress={this.btBack.bind(this)} style={styles.button}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableHighlight>
          </View>
        </View>
    );
  }
}
//styling
const styles = StyleSheet.create({
  container: {
    width: this.PostWidth,
    height: this.PostHeight,
    backgroundColor: '#ffffff',
    paddingBottom: 30
  },
  head: {
    height: 70,
    flexDirection: 'row'
  },
  titleText: {
    fontSize: 20,
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  menu:{
    flexDirection: 'row',
    height: 50,
    marginBottom: 1
  },
  body: {
    paddingBottom: 10,
    marginBottom: 40
  },
  bodyText: {
    fontSize: 32
  },
  button: {
    flex:1,
    height: 50,
    marginRight: 1,
    backgroundColor: '#aaaaaa',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 24
  }
});

module.exports = Contact;
