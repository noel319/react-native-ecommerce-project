import React from 'react'

import * as S from './styled'

const ProductImage = ({ sourceImg }) => {
  return (
    <S.ProductImage>
      <S.Image source={sourceImg} />
    </S.ProductImage>
  )
}

export default ProductImage
