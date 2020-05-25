import React, { useState, useEffect } from 'react';
import { color } from '../../var';
import { Image } from 'react-native';
import {
  Text,
  Left,
  Right,
  Card,
  CardItem,
  Body,
  Icon,
  Thumbnail,
  Button,
  View,
} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default ({
  _id,
  author,
  img,
  history,
  title,
  subTitle,
  comments,
  likes,
  date,
  gifts
}) => {

  const { name, lastName, perfilImg } = author;
  const authorId = author._id;
  
  return(
    <Card style={{ borderColor: color.prim, borderWidth: 1 }}>
      <CardItem>
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
            <Thumbnail source={perfilImg} />
            <View style={{ marginLeft: 10 }}>
              <Text>{`${name} ${lastName}`}</Text>
              <Text note>{new Date(date).toLocaleDateString()}</Text>
            </View>
        </TouchableOpacity>
      </CardItem>
      <CardItem cardBody>
        <Image style={{ flex: 1, height: 250 }} source={img} />
      </CardItem>
      <CardItem>
        <Left>
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon style={{ color: color.dark }} type="FontAwesome" name="heart" />
            <Text>{`+${likes.length}`}</Text>
            </TouchableOpacity>   
          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginLeft: 15 }}>
            <Icon style={{ color: color.dark }} type="FontAwesome" name="comment" />
            <Text>{`+${comments.length}`}</Text>
            </TouchableOpacity>   
          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginLeft: 15 }}>
            <Icon style={{ color: color.dark }} type="FontAwesome" name="gift" />
            <Text>{`+${gifts}`}</Text>
          </TouchableOpacity>           
        </Left>
      </CardItem>
    </Card>
  )
};
