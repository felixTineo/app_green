import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { color } from '../../var';
import { Icon } from 'native-base';
import Login from './login';
import Register from './register';
import { Button } from 'native-base';

export default ({ navigation }) => {
    const [register, setRegister] = useState(false);
    return(
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ImageBackground style={styles.container} source={require('../../../assets/images/static/main-bg.jpg')}>
          <View style={styles.formCont}>
            <ImageBackground style={styles.formContHeader} source={require('../../../assets/images/static/main-bg.jpg')}>
              <Icon style={styles.icon} type="FontAwesome" name="gift" />
              <Text style={styles.logo}>GreenLink...</Text>
              <Text style={styles.text}>Comparte y disfruta con los tuyos mientras te diviertes con GreenLink</Text>
            </ImageBackground>
            <View style={styles.form}>
              {
                !register && <Login navigation={navigation}/>
              }
              {
                register && <Register navigation={navigation}/>
              }
              {
                !register && (
                <View style={styles.registerCont}>
                  <Text style={styles.registerText}>Si no tienes una cuenta puedes acceder al </Text>
                  <TouchableOpacity onPress={()=>setRegister(!register)}><Text style={{ ...styles.registerText, textDecorationLine: "underline", color: color.prim, }}>REGISTRO.</Text></TouchableOpacity>
                </View>
                )
              }
              {
                register && (
                <View style={styles.registerCont}>
                  <Text style={styles.registerText}>¿Ya tienes una cuenta? </Text>
                  <TouchableOpacity onPress={()=>setRegister(!register)}><Text style={{ ...styles.registerText, textDecorationLine: "underline", color: color.prim, }}>LOGIN.</Text></TouchableOpacity>
                </View>
                )
              }
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
      color: color.light,
      fontSize: 48,
    },
    logo:{
      color: color.light,
      fontFamily: "Pacifico",
      fontSize: 24,
      lineHeight: 36,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
    },
    text:{
      color: color.light,
      textAlign: "center",
      backgroundColor: color.prim,
      fontSize: 9,
      position: "absolute",
      width: "100%",
      bottom: 0
    },
    formCont: {
      height: "75%",
      width: "80%",
      backgroundColor: color.light,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
    },
    formContHeader: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    form:{
      flex: 3,
      alignItems: "center",
      justifyContent: "space-between",
      overflow: "hidden",
    },
    registerCont:{
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      marginBottom: 25,
    },
    registerText:{
      fontSize: 11,
    }
  });
