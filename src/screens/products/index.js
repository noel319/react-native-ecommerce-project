import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'

import {
  getProducts as getProductsAction,
  getVisibleProducts,
} from '../../redux/docks/products'
import TextField from '../../components/textField'
import ListProducts from './components/listProducts'
import OrderProducts from './components/orderProducts'
import * as S from './styled'

const Products = ({ getProducts, products }) => {
  const [searchValue, setSearchValue] = useState('')
  const [typeSort, setTypeSort] = useState('')

  const listProducts = useCallback(
    (type = '', search = '') => {
      getProducts(type, search)
    },
    [getProducts],
  )

  const handleOrderAlphabet = type => {
    setTypeSort(type)
    listProducts(type)
  }

  const handleOrderLowestPrice = type => {
    setTypeSort(type)
    listProducts(type)
  }

  const handleOrderClear = type => {
    setTypeSort(type)
    listProducts(type)
  }

  const handleSearchProducts = (value = '') => {
    listProducts(typeSort, value)
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Lista de produtos</S.Title>
        <TextField
          placeholder="Buscar produtos"
          name="search"
          onChangeText={text => {
            handleSearchProducts(text)
            setSearchValue(text)
          }}
          value={searchValue}
        />
        <OrderProducts
          onAlphabet={handleOrderAlphabet}
          onLowestPrice={handleOrderLowestPrice}
          onClear={handleOrderClear}
        />
      </S.Header>
      <ListProducts products={products} loading={false} />
    </S.Container>
  )
}

const mapStateToProps = state => {
  return {
    products: getVisibleProducts(state.products),
  }
}

export default connect(mapStateToProps, {
  getProducts: getProductsAction,
})(Products)
