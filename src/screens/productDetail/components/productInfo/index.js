import React from 'react'

import * as S from './styled'

const ProductInfo = ({ info }) => {
  return (
    <S.ProductInfo>
      {/* <S.ProductName>(HOT) Termogênico 60 comprimidos</S.ProductName> */}
      <S.ProductName>{info.name}</S.ProductName>
      <S.Subtitle>Detalhes</S.Subtitle>
      <S.ProductDescription>{info.details.description}</S.ProductDescription>
      {/* <S.ProductDescription>
        Funciona da seguinte forma, o seu organismo já possui naturalmente uma
        necessidade por calorias.
      </S.ProductDescription> */}
    </S.ProductInfo>
  )
}

export default ProductInfo
