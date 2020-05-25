import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import { View, Button, Text }  from 'native-base';
import { color } from '../../var';
import Post from '../posts/post';

/** TEST */
import wallPosts from '../../test/posts';
/** TEST */

export default  () => {
  const [wall, setWall] = useState(true);
  const userPosts = useSelector(state => state.currentUser.posts);
  return(
    <View styles={styles.mainCont}>
      <View style={styles.postFilter}>
        <Button small onPress={()=> setWall(true)} rounded style={{ backgroundColor: wall ?  color.prim : "#ddd" }}>
          <Text style={{ color: wall ? color.light : color.dark }}>Muro</Text>
        </Button>
        <Button small onPress={()=> setWall(false)} rounded style={{ backgroundColor: !wall ?  color.prim : "#ddd", marginLeft: 10 }}>
          <Text style={{ color: !wall ? color.light : color.dark }}>Publicasiones</Text>
        </Button>
      </View>
      {
        wall && wallPosts.map(post => <Post {...post} />)
      }
      {
        !wall && userPosts.map(post => <Post {...post} />)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  mainCont:{

  },
  postFilter:{
    paddingVertical: 15,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: color.prim,
    flexDirection: "row",
    justifyContent: "flex-start",
  }
})