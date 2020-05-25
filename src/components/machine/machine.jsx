import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch }  from 'react-redux';
import { ON_MACHINE_PERFIL } from '../../store/actions';
import { StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { View, Text, Icon, Thumbnail, Button } from 'native-base';
import Layout from '../layout/layout';
import { color } from '../../var';
import ProductList from './product-li';
import Product from './product';

/*****************
 * TEST - MACHINE
******************/
import machines from '../../test/machines';
/******************************************/

export default ({ navigation })=> {
  const mid = navigation.getParam('mid', '123456789-1')
  const machine = useSelector(state => state.machine.current);
  const dispatch = useDispatch();
  const { products, ubication } = machine;
  const [productModal, setProductModal] = useState(false);
  
  useEffect(()=>{
    const machine = machines.find(machine => machine._id === mid);
    dispatch({ type: ON_MACHINE_PERFIL, machine });
  },[mid]);

  return(
    <Layout>
      {console.log(products)}
      <View style={styles.header}>
        <Icon style={styles.headerIcon} type="FontAwesome" name="map-marker" />
        <Text style={styles.headerText}>Ubicación:</Text>
        <Text style={styles.headerText}>{ubication}.</Text>
      </View>
      <View style={styles.productsContainer}>
        {
          Array.isArray(products) && products.map(product => <ProductList product={product} />)
        }        
      </View>
      <Product />
    </Layout>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: color.prim,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: color.sec,
  },
  headerIcon:{
    color: color.light,
    fontSize: 18,
  },
  headerText:{
    color: color.light,
    marginLeft: 4,
  },
  productsContainer:{
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
})