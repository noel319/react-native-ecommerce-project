import React from 'react'
import { SafeAreaView, Text, Image, View } from 'react-native'
import { connect } from 'react-redux'

const Cart = ({ products }) => {
  return (
    <SafeAreaView>
      <Text>Cart</Text>
      {products.length ? (
        products.map(product => (
          <View key={product.id}>
            <Text>{product.name}</Text>
            <Image source={product.thumbimage} />
          </View>
        ))
      ) : (
        <View>
          <Text>Nenhum item</Text>
        </View>
      )}
    </SafeAreaView>
  )
}

const mapStateTopProps = state => {
  return {
    products: state.cart.products || [],
  }
}

export default connect(mapStateTopProps)(Cart)
