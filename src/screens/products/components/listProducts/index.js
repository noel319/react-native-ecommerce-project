import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { FlatList, Dimensions } from 'react-native'

import ProductItem from '../../../../components/productItem'
import * as S from './styled'

const columns = 2
const ITEM_WIDTH = Dimensions.get('window').width

const ListProducts = ({ products }) => {
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
    <FlatList
      data={products}
      style={S.listProduct}
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
  )
}

ListProducts.defaultProps = {
  products: [],
}
ListProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}

export default ListProducts
