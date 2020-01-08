import React, { useState, useCallback } from 'react'
import { FlatList, Dimensions } from 'react-native'
import uuid from 'uuid/v4'

import images from '../../utils/images'
import ProductItem from '../../components/productItem'
import TextField from '../../components/textField'
import * as S from './styled'

const DATA = [
  {
    id: uuid(),
    title: '(HOT) Termogênico 60 comprimidos',
    image: images.productImg01,
    price: 35.99,
  },
  {
    id: uuid(),
    title: 'Blend Vegan - Growth supplements',
    image: images.productImg02,
    price: 35.99,
  },
  {
    id: uuid(),
    title: '(HOT) Termogênico 60 comprimidos',
    image: images.productImg01,
    price: 35.99,
  },
  {
    id: uuid(),
    title: 'Blend Vegan - Growth supplements',
    image: images.productImg02,
    price: 35.99,
  },
  {
    id: uuid(),
    title: '(HOT) Termogênico 60 comprimidos',
    image: images.productImg01,
    price: 35.99,
  },
  {
    id: uuid(),
    title: 'Blend Vegan - Growth supplements',
    image: images.productImg02,
    price: 35.99,
  },
]

const columns = 2
const ITEM_WIDTH = Dimensions.get('window').width

const Products = () => {
  const [selected, setSelected] = useState(new Map())
  const onSelect = useCallback(
    id => {
      const newSelected = new Map(selected)
      newSelected.set(id, !selected.get(id))

      setSelected(newSelected)
    },
    [selected],
  )
  return (
    <S.Container>
      <FlatList
        data={DATA}
        style={S.listProduct}
        ListHeaderComponent={
          <S.Header>
            <S.Title>Lista de produtos</S.Title>
            <TextField placeholder="Buscar produtos" name="search" />
          </S.Header>
        }
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            itemWidth={(ITEM_WIDTH - 10 * columns) / columns}
            onPress={onSelect}
          />
        )}
        horizontal={false}
        numColumns={columns}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </S.Container>
  )
}

export default Products
