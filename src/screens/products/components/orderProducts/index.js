import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const OrderProducts = ({ onAlphabet, onLowestPrice, onClear }) => {
  return (
    <S.OrderProducts>
      <S.Title>Ordenar por</S.Title>
      <S.ButtonGroup>
        <S.ButtonTouch separeteRight={1} onPress={() => onAlphabet('alphabet')}>
          <S.ButtonTouchText>Alfabeto</S.ButtonTouchText>
        </S.ButtonTouch>
        <S.ButtonTouch
          separeteRight={1}
          onPress={() => onLowestPrice('lowestPrice')}
        >
          <S.ButtonTouchText>Menor Preço</S.ButtonTouchText>
        </S.ButtonTouch>
        <S.ButtonTouch onPress={() => onClear('')}>
          <S.ButtonTouchText>Limpar</S.ButtonTouchText>
        </S.ButtonTouch>
      </S.ButtonGroup>
    </S.OrderProducts>
  )
}

OrderProducts.propTypes = {
  onAlphabet: PropTypes.func.isRequired,
  onLowestPrice: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
}
export default OrderProducts
