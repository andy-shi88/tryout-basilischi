import React, {Component} from 'react';
import {StyleSheet,
        View,
        TextInput,
        Text,
        TouchableHighlight,
        Dimensions,
        Alert
      } from 'react-native';

let windowWidth = Dimensions.get('window').width;
let api = require('../api/JsonPlaceHolder');

class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactId: this.props.contact.id,
      contactFN: this.props.contact.firstname, //default user [whatever]
      contactLN: this.props.contact.lastname,
      contactAdd: this.props.contact.address,
      contactOrg: this.props.contact.organization,
      contactPhone: this.props.contact.phone
    };
  }
  saveContact() {
    let contact = {
      id: this.state.contactId,
      phone: this.state.contactPhone,
      firstname: this.state.contactFN,
      lastname: this.state.contactLN,
      address: this.state.contactAdd,
      organization: this.state.contactOrg
    };
    api.updateContact(contact);
    Alert.alert( 'Status',
                  'Contact have been updated!',
                    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                    { cancelable: false } );
    this.props.callback.updateContactList();
    this.props.navigator.popN(2); //go back 2 scene (to main scene)
  }
  cancelEdit() {
    this.props.navigator.popN(1);//go back 2 scene (to main scene)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>First Name: </Text>
        <TextInput
          placeholder="First Name"
          style={styles.titleInput}
          onChangeText={(text) => this.setState({contactFN: text})}
          multiline={true}>
          {this.state.contactFN}
        </TextInput>
        <Text>Last Name: </Text>
        <TextInput
          placeholder="Last Name"
          style={styles.titleInput}
          onChangeText={(text) => this.setState({contactLN: text})}
          multiline={true}>
          {this.state.contactLN}
        </TextInput>
        <Text>Address: </Text>
        <TextInput
          placeholder="Address"
          style={styles.titleInput}
          onChangeText={(text) => this.setState({contactAdd: text})}
          multiline={true}>
          {this.state.contactAdd}
        </TextInput>
        <Text>Organization: </Text>
        <TextInput
          placeholder="Organization"
          style={styles.titleInput}
          onChangeText={(text) => this.setState({contactOrg: text})}
          multiline={true}>
          {this.state.contactOrg}
        </TextInput>
        <Text>Phone: </Text>
        <TextInput
          placeholder="Phone"
          style={styles.titleInput}
          onChangeText={(text) => this.setState({contactPhone: text})}
          multiline={true}>
          {this.state.contactPhone}
        </TextInput>
        <View style={styles.buttons}>
          <TouchableHighlight onPress={this.cancelEdit.bind(this)} underlayColor='#888888' style={styles.button}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.saveContact.bind(this)} underlayColor='#888888' style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
  bodyInput: {
    flex: 4,
    marginTop: 1,
    fontSize: 26
  },
  titleInput: {
    flex: 1,
    marginBottom: 1,
    fontSize: 30
  },
  buttons: {
    flex: 1,
    width: windowWidth,
    height: 90,
    flexDirection: 'row',
    flex: 1,
    marginTop: 40
  },
  button: {
    flex: 1,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: '#004400',
    alignSelf: 'center'
  }

});

module.exports = EditContact;
