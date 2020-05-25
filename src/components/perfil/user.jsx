import  React, { useState } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { View, Button, Icon, Text } from 'native-base';
import CameraPicker from '../camera-picker/cameraPicker';
import { color } from '../../var';
import formatName from '../../util/formatName';

const UserInfoItem = ({ icon, text, info }) => {

  return(
    <View style={{ flexDirection: "row", marginVertical: 5 }}>
      <Icon style={styles.userInfoIcon} type="FontAwesome5" name={icon} />
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "#999", textTransform: "capitalize", marginLeft: 5, fontSize: 16 }}>{text}</Text>
        <Text style={{ fontWeight: "bold", textTransform: "capitalize", marginLeft: 5, fontSize: 16 }}>{info}</Text>
      </View>
    </View>
  )
}

const FriendItem = ({ friend }) => {
  const { perfilImg } = friend;

  const name = formatName(friend.name);
  const lastName = formatName(friend.lastName);
  return(
    <TouchableOpacity style={styles.friendItemCont}>
      <Image style={styles.friendImg} source={perfilImg} />
      <Text>{`${name} ${lastName}`}</Text>
    </TouchableOpacity>
  )
}

export default ({ user }) => {
  const [visible, setVisible] = useState(false);
  const [uri, setUri] = useState(null);

  const onNext = (uri) => {
    setUri(uri);
    setVisible(false);
  }
  const { perfilImg, name, lastName, secondarySchool, university, actualCity, originalCity, friends } = user;
  return(
    <View style={styles.mainCont}>
      <View style={ styles.userImgCont  }>
        <ImageBackground
          imageStyle={styles.perfilImg}
          style={styles.perfilImgCont}
          source={uri ? { uri } : perfilImg}
        >
          <Button
            onPress={()=> setVisible(true)}
            style={styles.btnCamera}
            small
            icon
            light
          >
            <Icon style={{ fontSize: 16 }} type="FontAwesome5" name="camera" />
          </Button>
          <CameraPicker onClose={()=>setVisible(false)} visible={visible} onNext={onNext} />
        </ImageBackground>   
      </View>
      <View style={styles.userActionsCont}>
        <Text style={styles.userName}>{`${name} ${lastName}`}</Text>
        <View style={styles.actionsButtons}>
          <Button style={{ backgroundColor: color.prim, flex: 1, marginRight: 5 }} small full>
            <Text>Agregar Publicasión</Text>
          </Button>
          <Button  small light>
            <Icon type="FontAwesome5" name="ellipsis-h" />
          </Button>
        </View>
      </View>
      <View style={styles.userInfoCont}>
        <UserInfoItem 
          icon="graduation-cap"
          text="Estudió en"
          info={secondarySchool}
        />
        <UserInfoItem
          icon="graduation-cap"
          text="Estudió en"
          info={university}
        />
        <UserInfoItem
          icon="map-marker-alt"
          text="Nacio en"
          info={originalCity}
        />
        <UserInfoItem
          icon="home"
          text="vive en"
          info={actualCity}
        />
        <TouchableOpacity style={{ justifyContent:"center" }}>
          <UserInfoItem
            icon="ellipsis-h"
            text="Ver mas informacion"
          />
        </TouchableOpacity>
        <Button style={{ marginVertical: 5 }} light small full>
          <Text style={{ color: color.prim }}>Editar información</Text>
        </Button>
      </View>
      <View style={styles.userFriendsCont}>
        <View style={styles.titleHeader}>
          <Text style={styles.titleText}>Amigos</Text>
          <Text style={styles.titleText}>544</Text>
        </View>
        <View style={styles.friendsCont}>
          {
            friends.slice(0, 6).map(friend => <FriendItem friend={friend} />)
          }
        </View>
        <Button style={{ marginVertical: 5 }} light small full>
          <Text style={{ color: color.prim }}>Ver mas amigos</Text>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainCont:{
    //flex: 1,
  },
  userImgCont:{
    //flex: 1.5,
    height: 120,
  },
  userActionsCont:{
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  userInfoCont:{
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  userFriendsCont:{
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  actionsButtons:{
    flex: 1,
    flexDirection: "row",
  },
  titleHeader:{
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText:{
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: 18,
  },
  btnCamera:{
    margin: 6,
    alignSelf: "flex-end",
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  perfilImgCont: {
    height: 180,
    width: 180,
    borderRadius: 100,
    position: "absolute",
    alignSelf: "center",
    top: "-50%",
    justifyContent: "flex-end",
  },
  perfilImg:{
    height: 180,
    width: 180,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#ddd",
  },
  userName:{
    fontSize: 24,
    textTransform: "uppercase",
    textAlign: "center",
    padding: 5,
  },
  userInfoIcon:{
    color: "#999",
    fontSize: 18,
  },
  friendsCont:{
    flexDirection:"row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  friendItemCont:{
    width: 100,
    borderRadius: 5,
    alignItems:"center"
  },
  friendImg:{
    width: "100%",
    height: 100,
  },
  fiendName: {

  },
})