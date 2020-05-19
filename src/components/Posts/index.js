import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import axios from 'axios';

import Icon from 'react-native-vector-icons/FontAwesome5';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('https://picsum.photos/v2/list?limit=2')
    .then(({ data }) => {this.setState({ data })
    })
  }  

  render() {
    const { data } = this.state
    console.log(data)

    return (
      /*
      <ul>
      {data.map(item => <li>{item.author}</li>)}
      </ul>
      */
      data.map(item =>
      //<Text style={styles.author}>{item.author}</Text>

      <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.userInfo}>
              <Text style={styles.author}>{item.author}</Text>
            </View>
          </View>

          <View>
            <Image
              style={styles.picture_url}
              source={item.download_url+".jpg"}
            />
          </View>

          <View style={styles.footer}>
            <View style={styles.actions}>
              <View style={styles.leftActions}>
                <TouchableOpacity style={styles.action}>
                  <Icon name="heart" size={26} /> 
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity>
                  <Icon name="download" size={26} /> 
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )
     /*
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.userInfo}>
              <Text style={styles.author}>{data.map(item => {item.author})}</Text>
            </View>
          </View>

          <View>
            <Image
              style={styles.picture_url}
              source={data.map(item => {item.picture_url})}
            />
          </View>

          <View style={styles.footer}>
            <View style={styles.actions}>
              <View style={styles.leftActions}>
                <TouchableOpacity style={styles.action}>
                  <Icon name="heart" size={26} /> 
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity>
                  <Icon name="download" size={26} /> 
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
*/
    );
  }
}

const styles = StyleSheet.create({
  feed: {
    marginTop: 0,
    backgroundcolor: 'black'  
  },
  post: {
    position: 'relative',
    marginVertical: 5,
    zIndex: -1,
    backgroundcolor: 'green'
    },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  postOptions: {},
  postLike: {},
  userInfo: {},
  author: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold'
  },
  picture_url: {
    width: '100%',
    height: 480
  },
  footer: {
    paddingHorizontal: 15
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  action: {
    marginRight: 8
  },
  leftActions: {
    flexDirection: 'row'
  },
});

export default Feed;