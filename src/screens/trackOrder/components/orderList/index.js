import React, { useState } from 'react'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import VMasker from 'vanilla-masker'

import Card, { CardBody, CardHeader } from '../../../../components/card'
import Button from '../../../../components/button'

import * as S from './styled'

const OrderList = ({ orders }) => {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <S.OrderList>
      {orders.length ? (
        orders.map(orderItem => (
          <S.OrderItem key={orderItem.orderNumber}>
            <Card>
              <CardHeader>
                <S.OrderTitle>{`Nº ${orderItem.orderNumber}`}</S.OrderTitle>
                <S.OrderTitle>{`Total R$ ${VMasker.toMoney(
                  orderItem.total,
                )}`}</S.OrderTitle>
              </CardHeader>
              <CardBody>
                {showDetails &&
                  orderItem.products.map(product => (
                    <S.OrderProduct key={product.id}>
                      <S.OrderImage source={product.thumbimage} />
                      <S.OrderProductInfo>
                        <S.OrderTitle>{product.name}</S.OrderTitle>
                        <Text>{`Valor: R$ ${VMasker.toMoney(
                          product.price,
                        )}`}</Text>
                        <Text>{`Quantitade: ${product.quantity}`}</Text>
                      </S.OrderProductInfo>
                    </S.OrderProduct>
                  ))}
                <S.DividerButton>
                  <Button
                    title="Acompanhar entrega"
                    variant="contained"
                    onPress={() =>
                      Alert.alert(
                        'Acompanhamento',
                        'Seu pedido será entregue em 3 dias úteis',
                      )
                    }
                  />
                </S.DividerButton>
                <Button
                  title={!showDetails ? 'Ver detalhes' : 'Ocultar detalhes'}
                  variant="outlined"
                  onPress={() => setShowDetails(!showDetails)}
                />
              </CardBody>
            </Card>
          </S.OrderItem>
        ))
      ) : (
        <View>
          <Text>Nenhuma ordem encontrada</Text>
        </View>
      )}
    </S.OrderList>
  )
}

OrderList.defaultProps = {
  orders: [],
}

OrderList.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.object),
}
export default OrderList
