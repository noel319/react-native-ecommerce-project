import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'

import Card, { CardBody } from '../../components/card'
import Button from '../../components/button'
import { images } from '../../utils'

import * as S from './styled'

const TrackOrder = () => {
  return (
    <SafeAreaView>
      <S.OrderList>
        <S.Title>Lista de produtos</S.Title>
        {[1, 2, 3, 4, 5, 6].map(order => (
          <S.OrderItem key={order}>
            <Card>
              <CardBody>
                <S.OrderProduct>
                  <S.OrderImage source={images.productThumbImg01} />
                  <S.OrderProductInfo>
                    <S.OrderTitle>Termogênico 60 comprimidos</S.OrderTitle>
                    <Text>Valor: R$ 35,00</Text>
                    <Text>Quantidade: 10</Text>
                  </S.OrderProductInfo>
                </S.OrderProduct>
                <S.DividerButton>
                  <Button title="Acompanhar entrega" variant="contained" />
                </S.DividerButton>
                <Button title="Ver detalhes" variant="outlined" />
              </CardBody>
            </Card>
          </S.OrderItem>
        ))}
      </S.OrderList>
    </SafeAreaView>
  )
}

export default TrackOrder
