import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import VMasker from 'vanilla-masker'

import Card, { CardBody } from '../../components/card'
import Button from '../../components/button'
import * as S from './styled'

const Cart = ({ products, total }) => {
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
                <S.ProductQuantity>{`Quantidade: ${product.quantity} `}</S.ProductQuantity>
              </S.ProductItemInfo>
            </S.ProductItem>
          ))
        ) : (
          <View>
            <Text>Nenhum item</Text>
          </View>
        )}
      </S.ProductList>
      <Card variant="dark">
        <CardBody>
          <S.ProductContentBuy>
            <View>
              <S.ProductTagText>Total</S.ProductTagText>
              <S.ProductPrice>{total}</S.ProductPrice>
            </View>
            <Button variant="contained" title="Finalizar" onPress={() => {}} />
          </S.ProductContentBuy>
        </CardBody>
      </Card>
    </S.Cart>
  )
}

Cart.propTypes = {
  total: PropTypes.number,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateTopProps = state => {
  return {
    products: state.cart.products,
    total: state.cart.total,
  }
}

export default connect(mapStateTopProps)(Cart)
