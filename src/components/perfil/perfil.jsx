import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Dimensions } from 'react-native';
import { View } from 'native-base';
import Layout from '../layout/layout';
import Hero from './hero';
import User from './user';
import Posts from './posts';

const window = Dimensions.get("window");

export default ({ navigation }) => {
  
  const user = useSelector(state => state.currentUser);

  return(
    <Layout>
      <View style={styles.perfilCont}>
        <View style={styles.heroCont}>
          <Hero img={user.greenPost.img} />
        </View>
        <View style={styles.userCont}>
          <User user={user} />
        </View>
        <View style={styles.postsCont}>
          <Posts />
        </View>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  perfilCont:{
    padding: 10,
  },
  heroCont:{
    height: 200
  },
  userCont:{

  },
  postsCont:{

  }
})