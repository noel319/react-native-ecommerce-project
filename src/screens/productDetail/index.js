import React from 'react'
import { View, ScrollView, Alert } from 'react-native'
import PropTypes from 'prop-types'
import VMasker from 'vanilla-masker'
import { connect } from 'react-redux'
import { addToCart, getProduct } from '../../redux/docks/products'

import Card, { CardBody } from '../../components/card'
import Loading from '../../components/loading'
import Button from '../../components/button'
import { HeaderModal } from '../../components/headers'

import ProductImage from './components/productImage'
import ProductInfo from './components/productInfo'

import * as S from './styled'

const ProductDetail = ({ navigation, addProduct, product }) => {
  const id = navigation.getParam('id')

  const handleAddToCart = () => {
    addProduct(id)
    Alert.alert('Informação', 'Produto adicionado.')
  }

  return (
    <S.ProductDetail>
      <HeaderModal />
      {!product.name ? (
        <Loading title="Aguarde.." />
      ) : (
        <>
          <ScrollView>
            <ProductImage sourceImg={product.image} />
            <ProductInfo info={product} />
          </ScrollView>
          <Card variant="dark">
            <CardBody>
              <S.ProductContentBuy>
                <View>
                  <S.ProductTagText>Valor</S.ProductTagText>
                  <S.ProductPrice>{`R$ ${VMasker.toMoney(
                    product.price,
                  )}`}</S.ProductPrice>
                </View>
                <Button
                  variant="contained"
                  disabled={product.inventory <= 0}
                  title={product.inventory > 0 ? 'Adicionar' : 'Indisponível'}
                  onPress={handleAddToCart}
                />
              </S.ProductContentBuy>
            </CardBody>
          </Card>
        </>
      )}
    </S.ProductDetail>
  )
}

ProductDetail.propTypes = {
  addProduct: PropTypes.func.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    image: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
}

const mapStateToProps = state => {
  return {
    product: getProduct(
      state.products,
      state.products.productVisibleId.productId,
    ),
  }
}

export default connect(mapStateToProps, { addProduct: addToCart })(
  ProductDetail,
)
