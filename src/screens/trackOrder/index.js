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
                  <View>
                    <Text>(HOT) Termogênico 60 comprimidos</Text>
                    <Text>Valor: R$ 35,00</Text>
                    <Text>Valor: 10</Text>
                  </View>
                </S.OrderProduct>
                <Button title="Acompanhar entrega" variant="contained" />
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
