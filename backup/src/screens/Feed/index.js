import React from 'react';
import { View, SafeAreaView, FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import like from '../../../assets/like.png';
import options from '../../../assets/options.png';

function Feed() {
  const posts = [
    {
      id: '1',
      author: 'Nome',
      picture_url:'https://i.picsum.photos/id/866/200/300.jpg',
    },
    {
        id: '2',
        author: 'Nome',
        picture_url:'https://i.picsum.photos/id/866/200/300.jpg',
    },
      {
        id: '3',
        author: 'Nome',
        picture_url:'https://i.picsum.photos/id/866/200/300.jpg',
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
                <Image source={like} />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Image source={options} />
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  post: {
    marginVertical: 10
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15
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
    height: 600
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