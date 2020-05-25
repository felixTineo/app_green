import { combineReducers } from 'redux';
import {
  ON_LAYOUT_CAMERAPICKER,
  ON_CURRENT_USER,
  ON_CURRENT_USER_POST,
  ON_MACHINE_PERFIL,
  ON_MACHINE_PRODUCT,
  ON_STORE_SECTION,
  ON_STORE_PRODUCT,
  storeSection,
} from './actions';

import admin from '../test/admin';

const initialState = {
  layout:{
    cameraPicker: false,
  },
  currentUser:admin,
  otherUser: {},
  machine:{
    current:{},
    product: {},
  },
  store:{
    products: require('../test/products'),
    visible:{
      promotion: true,
      jewel: false,
      ebook: false,
      candy: false,
      music: false,
      tv: false,
      toy: false,
    },
    product: {},
  },
}

const layout = (state = initialState.layout, action) => {
  switch(action.type){
    case ON_LAYOUT_CAMERAPICKER:
      return Object.assign({}, state, { cameraPicker: action.visible });
    default:
      return state;
  }
}

const currentUser = (state = initialState.currentUser, action) => {
  switch(action.type){
    case ON_CURRENT_USER:
      return action.user;
    case ON_CURRENT_USER_POST:
      return Object.assign({}, state, { posts: [action.post, ...state.posts] });
    default:
      return state;
  }
}

const machine = (state = initialState.machine, action) => {
  switch(action.type){
    case ON_MACHINE_PERFIL:
      return Object.assign({}, state, { current: action.machine });
    case ON_MACHINE_PRODUCT:
      return Object.assign({}, state, { product: action.product });
    default:
      return state;
  }
};

const store = (state = initialState.store, action) => {
  switch(action.type){
    case ON_STORE_SECTION:
      return Object.assign({}, state, { visible: {
        promotion: action.section === storeSection.PROMOTION ? true : false,
        jewel: action.section === storeSection.JEWEL ? true : false,
        ebook: action.section === storeSection.EBOOK ? true : false,
        candy: action.section === storeSection.CANDY ? true : false,
        music: action.section === storeSection.MUSIC ? true : false,
        tv: action.section === storeSection.TV ? true : false,
        toy: action.section === storeSection.TOY ? true : false,
      } });
    case ON_STORE_PRODUCT:
      return Object.assign({}, state, { product: action.product });
    default:
      return state;
  }
}

export default combineReducers({
  layout,
  machine,
  currentUser,
  store,
});
