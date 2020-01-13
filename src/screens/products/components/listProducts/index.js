import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { FlatList, Dimensions } from 'react-native'
import { connect } from 'react-redux'

import { setProductId } from '../../../../redux/docks/products'
import ProductItem from '../../../../components/productItem'
import { NavigationService } from '../../../../navigation'
import * as S from './styled'

const columns = 2
const ITEM_WIDTH = Dimensions.get('window').width

const ListProducts = ({ products, setProduct, loading }) => {
  const [selected, setSelected] = useState(new Map())

  const onSelect = useCallback(
    id => {
      const newSelected = new Map(selected)
      newSelected.set(id, !selected.get(id))
      setProduct(id)
      NavigationService.navigate('ProductDetail', { id })
      setSelected(newSelected)
    },
    [selected, setProduct],
  )

  const productLoding = () => (
    <>
      <S.LoadingIndicator size={40} />
    </>
  )
  const renderList = () => {
    return products.length ? (
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
    ) : (
      <S.SubTitle>Nenhum produto encontrado :(</S.SubTitle>
    )
  }
  return loading ? productLoding() : renderList()
}

ListProducts.defaultProps = {
  products: [],
  loading: false,
}
ListProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  setProduct: PropTypes.func.isRequired,
}

export default connect(null, { setProduct: setProductId })(ListProducts)
