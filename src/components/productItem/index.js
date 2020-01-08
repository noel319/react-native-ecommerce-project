import React from 'react'
import PropTypes from 'prop-types'
import VMasker from 'vanilla-masker'

import * as S from './styled'

const ProductItem = ({ product, onPress, itemWidth }) => {
  return (
    <S.ProductItemTouch width={itemWidth} onPress={() => onPress(product.id)}>
      <S.Image source={product.image} />
      <S.Title>{product.name}</S.Title>
      <S.Price>{`R$ ${VMasker.toMoney(product.price)}`}</S.Price>
    </S.ProductItemTouch>
  )
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  onPress: PropTypes.func.isRequired,
  itemWidth: PropTypes.number.isRequired,
}

export default ProductItem
