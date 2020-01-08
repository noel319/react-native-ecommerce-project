import styled from 'styled-components/native'

import { TextSmallRegular, TextMediumBold } from '../../styles/typography'

export const ProductDetail = styled.SafeAreaView`
  flex: 1;
`

export const ProductContentBuy = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ProductTagText = styled.Text`
  ${TextSmallRegular};
  color: ${props => props.theme.WHITE};
`

export const ProductPrice = styled.Text`
  ${TextMediumBold};
  color: ${props => props.theme.GREEN};
`
