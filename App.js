import React, { useEffect, useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createStore } from 'redux';
//import { ApolloClient, } from 'apollo-client';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'
import { Provider } from 'react-redux';
import appGreen from './src/store/reducers';
const store = createStore(appGreen);
import NavBar from './src/components/navigation/nav';
import Home from './src/components/home/home';
import Wall from './src/components/wall/wall';
import Perfil from './src/components/perfil/perfil';
import Notifications from './src/components/notifications/notifications';
import Search from './src/components/search/search';
import QrCode from './src/components//qrcode/qrcode';
import GreenStore from './src/components/store/store';
import PostCreator from './src/components/posts/creator';
import Machine from './src/components/machine/machine';

const authStack = createStackNavigator(
  {
    login: {
      screen: Home,
      navigationOptions:{
        header: null,
      }
    }
  }/*,
  {
    initialRouteName: 'login'
  }*/
)
const tabNavigator = createBottomTabNavigator(
  {
    /*home: {
      screen: Home,
      navigationOptions:{
        tabBarVisible: false,
      }
    },*/
    wall: Wall,
    perfil: Perfil,
    notifications: Notifications,
    search: Search,
    qrcode: QrCode,
    store: GreenStore,
    postCreator: {
      screen: PostCreator,
      navigationOptions:{
        tabBarVisible: false,
      }
    },
    machine: Machine,
  },
  {
    initialRouteName: "postCreator",
    backBehavior: 'history',
    tabBarComponent: ({ navigation }) => <NavBar navigation={navigation} />
  }
)

const Loading = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(()=>{
    (async()=>{
      try{
        if(isLogin){
          navigation.navigate('app');
        }else {
          navigation.navigate('login');
        }
      }catch(e){
        console.log(e);
      }
    }
    )()
  },[]);
  return <AppLoading />
}

const client = new ApolloClient({
  uri: 'http://192.168.43.165:3000'
})

export default function App() {
  const [font, setFont] = useState(false);
  const onFont = async()=> {
    await Font.loadAsync({
      Pacifico: require('./assets/fonts/Pacifico-Regular.ttf'),
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Sansita: require('./assets/fonts/Sansita-Regular.ttf'),
    });
    setFont(true);
  }
  useEffect(()=> {
    onFont();
  },[]);

  if(!font){
    return <AppLoading />
  } else {
    return (
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
    )
  }
}
/*<Provider store={store}>
        <AppContainer />
    </Provider>*/
const AppContainer = createAppContainer(
  createSwitchNavigator({
    login: authStack,
    app: tabNavigator,
    loading: Loading,
  },
  {
    initialRouteName: 'app',
  }
)
);
