import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ON_STORE_SECTION, storeSection } from '../../store/actions';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View, Icon } from 'native-base';
import Layout from '../layout/layout';
import Nav from './nav';
import ProductList from './product-li';
import Product from './product';

export default ({ navigation }) => {
  const visible = useSelector(state => state.store.visible);
  const products = useSelector(state => state.store.products);
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
    <Layout>
      <Nav />
      <View style={styles.productsContainer}>
        {
          promotion && products.filter(product => product.promotion).map(product => <ProductList product={product} />)
        }
        {
          jewel && products.filter(product => product.tag === storeSection.JEWEL).map(product => <ProductList product={product} />)
        }
        {
          ebook && products.filter(product => product.tag === storeSection.EBOOK).map(product => <ProductList product={product} />)
        }
        {
          candy && products.filter(product => product.tag === storeSection.CANDY).map(product => <ProductList product={product} />)
        }
        {
          music && products.filter(product => product.tag === storeSection.MUSIC).map(product => <ProductList product={product} />)
        }
        {
          tv && products.filter(product => product.tag === storeSection.TV).map(product => <ProductList product={product} />)
        }
        {
          toy && products.filter(product => product.tag === storeSection.TOY).map(product => <ProductList product={product} />)
        }                                                  
      </View>
      <Product />
    </Layout>
  )
}

const styles = StyleSheet.create({
  productsContainer:{
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
})