import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ON_STORE_SECTION, storeSection } from '../../store/actions';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View, Icon } from 'native-base';
import { color } from '../../var';

export default ()=>{
  const visible = useSelector(state => state.store.visible);
  const dispatch = useDispatch();
  const {
    promotion,
    jewel,
    ebook,
    candy,
    music,
    tv,
    toy,
  } = visible;
  return(
    <View style={styles.header}>
      <View style={styles.iconCont}>
        <TouchableOpacity
          onPress={()=> dispatch({ type: ON_STORE_SECTION, section: storeSection.PROMOTION })}
          style={{
            ...styles.button,
            backgroundColor: promotion ? color.light : "transparent",
          }}
        >
          <Icon
            style={{
              ...styles.icon,
              color: promotion ? color.prim : color.light
            }}
            type="FontAwesome"
            name="star-o"
          />
        </TouchableOpacity>
        <Text style={{ ...styles.textIcon, fontWeight: promotion ? "bold" : 'normal' }}>Top</Text>
      </View>
      <View style={styles.iconCont}>
        <TouchableOpacity
          onPress={()=> dispatch({ type: ON_STORE_SECTION, section: storeSection.CANDY })}
          style={{
            ...styles.button,
            backgroundColor: candy ? color.light: "transparent",
          }}
        >
          <Icon
            style={{
              ...styles.icon,
              color: candy ? color.prim: color.light
            }}
            type="FontAwesome5"
            name="candy-cane"
          />
        </TouchableOpacity>
        <Text style={{ ...styles.textIcon, fontWeight: candy ? "bold" : 'normal' }}>Golosina</Text>
      </View>
      <View style={styles.iconCont}>
        <TouchableOpacity
          onPress={()=> dispatch({ type: ON_STORE_SECTION, section: storeSection.TOY })}
          style={{
            ...styles.button,
            backgroundColor: toy ? color.light: "transparent",
          }}
        >
          <Icon
            style={{
              ...styles.icon,
              color: toy ? color.prim: color.light
            }}
            type="FontAwesome5"
            name="tripadvisor"
          />
        </TouchableOpacity>
        <Text style={{ ...styles.textIcon, fontWeight: toy ? "bold" : 'normal' }}>Juguete</Text>
      </View>
      <View style={styles.iconCont}>
        <TouchableOpacity
          onPress={()=> dispatch({ type: ON_STORE_SECTION, section: storeSection.JEWEL })}
          style={{
            ...styles.button,
            backgroundColor: jewel ? color.light: "transparent",
          }}
        >
          <Icon
            style={{
              ...styles.icon,
              color: jewel ? color.prim: color.light
            }}
            type="FontAwesome"
            name="diamond"
          />
        </TouchableOpacity>
        <Text style={{ ...styles.textIcon, fontWeight: jewel ? "bold" : 'normal' }}>Bizuteria</Text>
      </View>
      <View style={styles.iconCont}>
        <TouchableOpacity
          onPress={()=> dispatch({ type: ON_STORE_SECTION, section: storeSection.MUSIC })}
          style={{
            ...styles.button,
            backgroundColor: music ? color.light: "transparent",
          }}
        >
          <Icon
            style={{
              ...styles.icon,
              color: music ? color.prim: color.light
            }}
            type="FontAwesome5"
            name="music"
          />
        </TouchableOpacity>
        <Text style={{ ...styles.textIcon, fontWeight: music ? "bold" : 'normal' }}>Musica</Text>
      </View>
      <View style={styles.iconCont}>
        <TouchableOpacity
          onPress={()=> dispatch({ type: ON_STORE_SECTION, section: storeSection.EBOOK })}
          style={{
            ...styles.button,
            backgroundColor: ebook ? color.light: "transparent",
          }}
        >
          <Icon
            style={{
              ...styles.icon,
              color: ebook ? color.prim: color.light
            }}
            type="FontAwesome5"
            name="book"
          />
        </TouchableOpacity>
        <Text style={{ ...styles.textIcon, fontWeight: ebook ? "bold" : 'normal' }}>ebook</Text>
      </View>
      <View style={styles.iconCont}>
        <TouchableOpacity
          onPress={()=> dispatch({ type: ON_STORE_SECTION, section: storeSection.TV })}
          style={{
            ...styles.button,
            backgroundColor: tv ? color.light: "transparent",
          }}
        >
          <Icon
            style={{
              ...styles.icon,
              color: tv ? color.prim: color.light
            }}
            type="FontAwesome5"
            name="tv"
          />
        </TouchableOpacity>
        <Text style={{ ...styles.textIcon, fontWeight: tv ? "bold" : 'normal' }}>TV</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    backgroundColor: color.prim,
    borderWidth: 1,
    borderColor: color.sec,
  },
  button:{
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: color.light,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  iconCont:{
    alignItems: "center",
  },
  icon:{
    fontSize: 16,
  },
  textIcon:{
    fontSize: 11,
    color: color.light,
  }
})