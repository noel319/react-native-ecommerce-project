import React from 'react'
import { View, ScrollView } from 'react-native'

import Card, { CardBody } from '../../components/card'
import Button from '../../components/button'

import ProductImage from './components/productImage'
import ProductInfo from './components/productInfo'

import * as S from './styled'

const ProductDetail = () => {
  return (
    <S.ProductDetail>
      <ScrollView>
        <ProductImage />
        <ProductInfo />
      </ScrollView>
      <Card variant="dark">
        <CardBody>
          <S.ProductContentBuy>
            <View>
              <S.ProductTagText>Valor</S.ProductTagText>
              <S.ProductPrice>R$ 34.23</S.ProductPrice>
            </View>
            <Button variant="contained" title="Adicionar" onPress={() => {}} />
          </S.ProductContentBuy>
        </CardBody>
      </Card>
    </S.ProductDetail>
  )
}

export default ProductDetail
