import React, {Component} from 'react';
import {StyleSheet,
        View,
        ListView,
        Text,
        TouchableHighlight,
        Dimensions
      } from 'react-native';

let api = require('../api/JsonPlaceHolder');
// let Post = require('./Post');
let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Main extends Component{
  //constructor
  constructor(props) {
    super(props);
    this.state = {
      posts: ds
    };
  }
  updatePostsState(){
    //fetch all data into the state
    api.getPosts().then((res)=>{
      this.setState({
        posts: ds.cloneWithRows(res)
      });
    })
  }
  //lifecycle configuration
  componentWillMount() {
    //fetch all data into the state
    api.getPosts().then((res)=>{
      this.setState({
        posts: ds.cloneWithRows(res)
      });
    })
  }
  //event listener functions
  onButtonPress() {
    //console.log(this.state.postName);
    this.props.navigator.push({
      id: 'CreatePost',
      functions: this
    });
  }
  ViewTask1() {
    //console.log(this.state.postName);
    this.props.navigator.push({
      id: 'Task1'
    });
  }
  onPostSelected(rowData) {
    this.props.navigator.push({
      id: 'Post',
      post: rowData,
      functions: this
    });
  }
  renderRow(rowData, sectionId, rowId) {
    return (
      <TouchableHighlight
        key={rowId}
        data={rowData}
        underlayColor="#cccccc"
        onPress={this.onPostSelected.bind(this, rowData)}
        style={styles.PostMenu}>
          <Text
            style={styles.postTitle}>
            {rowData.title}
          </Text>
      </TouchableHighlight>
    );
  }
  //render
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.PostList}>
          <ListView
            dataSource={this.state.posts}
            renderRow={this.renderRow.bind(this)}
          />
        </View>
        <TouchableHighlight onPress={this.onButtonPress.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>Create Post</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.ViewTask1.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>View Task 1</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  PostMenu: {
    borderWidth: 1,
    borderColor: '#ccccee',
    width: Dimensions.get('window').width,
    marginLeft: -1
  },
  postTitle: {
    fontSize: 30,
    color: '#000000',
    padding: 0,
    height: 120,
    justifyContent: 'center'
  },
  PostList: {
    flex: 3,
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#3fb0ac',
    marginTop: 2
  },
  buttonText: {
    fontSize: 30,
    color: '#fae596'
  }
});

module.exports = Main;
