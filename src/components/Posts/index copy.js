import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

function Feed() {
  
  const posts = [
    {
      "id": "1",
      "author": "Nome",
      "picture_url":"https://i.picsum.photos/id/866/200/300.jpg",
    },
    {
      "id": "2",
      "author": "Nome",
      "picture_url":"https://i.picsum.photos/id/866/200/300.jpg",
    },  
    {
      "id": "3",
      "author": "Nome",
      "picture_url":"https://i.picsum.photos/id/866/200/300.jpg",
    },
    {
      "id": "4",
      "author": "Nome",
      "picture_url":"https://i.picsum.photos/id/866/200/300.jpg",
    },
    {
      "id": "5",
      "author": "Nome",
      "picture_url":"https://i.picsum.photos/id/866/200/300.jpg",
    },    
  ];

  function renderItem({ item: post }) {

    return (
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.userInfo}>
              <Text style={styles.author}>{post.author}</Text>
            </View>
          </View>

          <View>
            <Image
              style={styles.picture_url}
              source={{ uri: post.picture_url }}
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
    );
  }

  return (
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
  );
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