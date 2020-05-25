import React, { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Button, Icon } from 'native-base';
import { color } from '../../var';
import CameraPicker from '../camera-picker/cameraPicker';


export default ({ img }) => {
  const [visible, setVisible] = useState(false);
  const [uri, setUri] = useState(null);

  const onNext = (uri) => {
    setUri(uri);
    setVisible(false);
  }

  return(
    <ImageBackground
      imageStyle={styles.greenPostImg}
      style={styles.greenPostCont}
      source={uri ? { uri } : img}
    >
      <Button onPress={()=> setVisible(true)} style={styles.btnCamera} small icon light>
        <Icon style={{ fontSize: 16 }} type="FontAwesome5" name="camera" />
      </Button>
      <CameraPicker onClose={()=>setVisible(false)} visible={visible} onNext={onNext} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  greenPostCont:{
    flex: 1,
    justifyContent: "flex-end",
  },
  btnCamera:{
    margin: 6,
    alignSelf: "flex-end",
  },
  greenPostImg:{
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
})