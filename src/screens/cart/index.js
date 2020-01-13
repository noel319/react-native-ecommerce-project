import React from 'react'
import { View, Alert } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import VMasker from 'vanilla-masker'

import { clearCart, getCartProducts, getTotal } from '../../redux/docks/cart'
import { addToCart, removeFromCart } from '../../redux/docks/products'
import productService from '../../services/productService'
import Card, { CardBody } from '../../components/card'
import Button from '../../components/button'
import * as S from './styled'

const Cart = ({
  products,
  total,
  navigation,
  cartEmpty,
  addProduct,
  removeProduct,
}) => {
  const handleFinshCart = async () => {
    try {
      const { data } = await productService.createOrder(products, total)
      console.log('RESPONSE: ', data)
      cartEmpty()
      navigation.navigate('TrackOrder')
      Alert.alert('Sucesso', 'Pedido finalziado com sucesso')
    } catch (error) {
      const { message } = error.data
      Alert.alert('Error', message || 'Houver um error no seu pagamento')
    }
  }
  return (
    <S.Cart>
      <S.Title>Carrinho</S.Title>
      <S.ProductList>
        {products.length ? (
          products.map(product => (
            <S.ProductItem key={product.id}>
              <S.ProductImage source={product.thumbimage} />
              <S.ProductItemInfo>
                <S.ProductTitle>{product.name}</S.ProductTitle>
                <S.ProductPrice>{`R$ ${VMasker.toMoney(
                  product.price,
                )}`}</S.ProductPrice>
                <S.GroupButtons>
                  <S.IconButton onPress={() => addProduct(product.id)}>
                    <S.IconPlus />
                  </S.IconButton>
                  <S.ProductQuantity>{product.quantity}</S.ProductQuantity>
                  <S.IconButton onPress={() => removeProduct(product.id)}>
                    <S.IconMinus />
                  </S.IconButton>
                </S.GroupButtons>
              </S.ProductItemInfo>
            </S.ProductItem>
          ))
        ) : (
          <S.CartEmpty>
            <S.CartEmptyText>Nenhum item no carrinho :(</S.CartEmptyText>
          </S.CartEmpty>
        )}
      </S.ProductList>
      {!!total && (
        <Card variant="dark">
          <CardBody>
            <S.ProductContentBuy>
              <View>
                <S.ProductTagText>Total</S.ProductTagText>
                <S.ProductPrice>{`R$ ${VMasker.toMoney(
                  total,
                )}`}</S.ProductPrice>
              </View>
              <Button
                variant="contained"
                title="Finalizar"
                onPress={handleFinshCart}
              />
            </S.ProductContentBuy>
          </CardBody>
        </Card>
      )}
    </S.Cart>
  )
}

Cart.propTypes = {
  total: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
}

const mapStateTopProps = state => {
  return {
    products: getCartProducts(state),
    total: getTotal(state),
  }
}

export default connect(mapStateTopProps, {
  cartEmpty: clearCart,
  addProduct: addToCart,
  removeProduct: removeFromCart,
})(Cart)
