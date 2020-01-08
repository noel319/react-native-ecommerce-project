import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const OrderProducts = ({ onOrderAlphabet, onOrderLowestPrice }) => {
  return (
    <S.OrderProducts>
      <S.Title>Ordenar por</S.Title>
      <S.ButtonGroup>
        <S.ButtonTouch separeteRight={1} onPress={onOrderAlphabet}>
          <S.ButtonTouchText>Alfabeto</S.ButtonTouchText>
        </S.ButtonTouch>
        <S.ButtonTouch onPress={onOrderLowestPrice}>
          <S.ButtonTouchText>Menor Preço</S.ButtonTouchText>
        </S.ButtonTouch>
      </S.ButtonGroup>
    </S.OrderProducts>
  )
}

OrderProducts.propTypes = {
  onOrderAlphabet: PropTypes.func.isRequired,
  onOrderLowestPrice: PropTypes.func.isRequired,
}
export default OrderProducts
