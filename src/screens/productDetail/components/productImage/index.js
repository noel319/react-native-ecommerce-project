import React from 'react'

import { images } from '../../../../utils'

import * as S from './styled'

const ProductImage = () => {
  return (
    <S.ProductImage>
      <S.Image
        source={images.productImg01}
        style={{ width: 172, height: 212 }}
      />
    </S.ProductImage>
  )
}

export default ProductImage
