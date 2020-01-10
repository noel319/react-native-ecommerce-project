import React, { useState } from 'react'

import { NavigationEvents } from 'react-navigation'

import productService from '../../services/productService'
import Loading from '../../components/loading'
import OrderList from './components/orderList'

import * as S from './styled'

const TrackOrder = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)
  const navigateFocus = () => {
    async function listOrder() {
      setLoading(true)
      const { data } = await productService.listOrder()
      setLoading(false)
      setOrders(data || [])
    }
    listOrder()
  }
  return (
    <S.TrackOrder>
      <NavigationEvents onDidFocus={navigateFocus} />
      <S.Title>Lista de pedidos</S.Title>
      {loading ? <Loading /> : <OrderList orders={orders} />}
    </S.TrackOrder>
  )
}

export default TrackOrder
