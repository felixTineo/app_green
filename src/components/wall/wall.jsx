import React, { useState, useEffect } from 'react';
import { color } from '../../var';
import { FlatList } from 'react-native';
import { Text } from 'native-base';
import Layout from '../layout/layout';
import Event from '../events/event';
import Post from '../posts/post';
/*****************
 * UTIL - TEST
 ****************/
import greenEvents from '../../test/events';
import posts from '../../test/posts';
 /***************/

export default ({ navigation }) => {
  return(
    <Layout>
      <FlatList
        data={greenEvents}
        renderItem={({ item }) => <Event {...item} />}
        keyExtractor={(item) => item.id}
        horizontal
      />
      {
        posts.map((post)=> <Post key={post._id} {...post} />)
      }
    </Layout>
  )
}
