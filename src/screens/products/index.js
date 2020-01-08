import React, { useState, useEffect } from 'react'

import productService from '../../services/productService'
import TextField from '../../components/textField'
import ListProducts from './components/listProducts'
import OrderProducts from './components/orderProducts'
import * as S from './styled'

const Products = () => {
  const [products, setProducts] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(false)

  const handleOrderAlphabet = () => {
    listProducts('alphabet')
  }
  const handleOrderLowestPrice = () => {
    listProducts('lowestPrice')
  }

  const handleSearchProducts = async (value = '') => {
    try {
      if (value.length <= 3) {
        return
      }
      const { data } = await productService.searchProducts(value)
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  async function listProducts(type = '') {
    try {
      setLoading(true)
      const { data } = await productService.listProducts(type)
      setLoading(false)
      setProducts(data)
    } catch (error) {
      setLoading(false)
    }
  }
  useEffect(() => {
    listProducts()
  }, [setProducts])

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
          onOrderAlphabet={handleOrderAlphabet}
          onOrderLowestPrice={handleOrderLowestPrice}
        />
      </S.Header>
      <ListProducts products={products} loading={loading} />
    </S.Container>
  )
}

export default Products
