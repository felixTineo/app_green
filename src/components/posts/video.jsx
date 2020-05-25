import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { color } from '../../var';
import { Icon } from 'native-base';
import * as Permissions from 'expo-permissions';
import { postType } from './constants';

export default function App({ onNext }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [size, setSize] = useState(null);
  const [disable, setDisable] = useState(false);
  const [record, setRecord] = useState(false);
  let camera = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      const perm = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
      console.log(perm);
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(()=> {
    (async ()=> {
      const size = await camera.getAvailablePictureSizesAsync('4:3');
      setSize(size[2]);
    })();
  },[camera]);

  const onRec = async()=> {
    if(camera){
      setRecord(true);
      const { uri } = await camera.recordAsync({ maxDuration: 5 });
      setRecord(false);      
      onNext(uri, postType.VIDEO);
    }
  }

  const onStop = async()=> {
    setRecord(false);
    camera.stopRecording();
    //onNext(uri);
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width:"100%",
          height:"75%"
        }}
      >
        <Camera
          ref={ref => { camera = ref }}
          style={{
            flex: 1,
          }}
          type={type}
          ratio="4:3"
          pictureSize={size}
          >
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Icon style={{ marginLeft: 5, marginBottom: 5, color: color.light }} type="FontAwesome5" name="sync" />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
      <TouchableOpacity
        onPress={record ? onStop : onRec}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: record ? '#DDD' : "red",
          marginTop: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {
          record === false
            ?<Text style={{ color: color.light, fontWeight: "bold" }}>REC</Text>
            :<Text style={{ color: "red", fontWeight: "bold" }}>STOP</Text>
        }
      </TouchableOpacity>
    </View>
  );
}