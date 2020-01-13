import styled from 'styled-components/native'
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons'

import {
  TextSmallRegular,
  TextMediumBold,
  TextRegularMedium,
  Title as TitleStyle,
} from '../../styles/typography'

export const Cart = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.WHITE};
`

export const Title = styled.Text`
  ${TitleStyle};
  padding-top: ${props => props.theme.metrics.spacing()};
  padding-bottom: ${props => props.theme.metrics.spacing(2)};
  text-align: center;
`

export const GroupButtons = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${props => props.theme.metrics.spacing(1.5)};
`

export const IconPlus = styled(IconMaterial).attrs({
  name: 'plus',
  size: 15,
})`
  color: ${props => props.theme.GREY_DARK};
`

export const IconMinus = styled(IconMaterial).attrs({
  name: 'minus',
  size: 15,
})`
  color: ${props => props.theme.GREY_DARK};
`

export const IconButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.GREY};
  border-radius: 50;
  justify-content: center;
  align-items: center;
`

export const CartEmpty = styled.View`
  padding: ${props => props.theme.metrics.spacing(2)};
`

export const CartEmptyText = styled.Text`
  ${TextRegularMedium};
  align-self: center;
`

export const ProductContentBuy = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ProductList = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 10,
  },
})``

export const ProductItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.metrics.spacing(2)};
`

export const ProductItemInfo = styled.View`
  padding-bottom: ${props => props.theme.metrics.spacing(0.8)};
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.GREY_DARK};
  flex: 1;
  align-self: flex-end;
  margin-left: ${props => props.theme.metrics.spacing(1.5)};
`

export const ProductTitle = styled.Text`
  ${TextRegularMedium}
  color: ${props => props.theme.GREY_DARK};
`

export const ProductImage = styled.Image`
  width: 54px;
  height: 66px;
`

export const ProductTagText = styled.Text`
  ${TextSmallRegular};
  color: ${props => props.theme.WHITE};
`

export const ProductQuantity = styled.Text`
  ${TextSmallRegular};
  margin-left: ${props => props.theme.metrics.spacing(1)};
  margin-right: ${props => props.theme.metrics.spacing(1)};
`

export const ProductPrice = styled.Text`
  ${TextMediumBold};
  color: ${props => props.theme.GREEN};
`
