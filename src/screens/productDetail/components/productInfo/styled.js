import styled from 'styled-components/native'

import {
  TextMedium,
  TextRegular,
  TextRegularMedium,
} from '../../../../styles/typography'

export const ProductInfo = styled.View`
  padding: ${props => props.theme.metrics.spacing(1.5)};
  flex: 1;
`

export const ProductName = styled.Text`
  ${TextMedium};
  margin-bottom: ${props => props.theme.metrics.spacing(2)};
`
export const Subtitle = styled.Text`
  ${TextRegularMedium};
  margin-bottom: ${props => props.theme.metrics.spacing(0.5)};
`

export const ProductDescription = styled.Text`
  ${TextRegular};
`
