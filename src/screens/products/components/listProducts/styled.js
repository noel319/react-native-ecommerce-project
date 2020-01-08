import styled from 'styled-components/native'

import { SubTitle as SubTitleStyle } from '../../../../styles/typography'

export const SubTitle = styled.Text`
  ${SubTitleStyle};
  padding: ${props => props.theme.metrics.spacing(1.2)};
`

export const Header = styled.View`
  margin-top: ${props => props.theme.metrics.spacing(2)};
  margin-bottom: ${props => props.theme.metrics.spacing(1.5)};
  padding: ${props => props.theme.metrics.spacing()};
`

export const LoadingIndicator = styled.ActivityIndicator`
  align-self: center;
  margin-top: ${props => props.theme.metrics.spacing(2)};
  margin-bottom: ${props => props.theme.metrics.spacing(2)};
`

export const listProduct = {
  marginTop: 15,
}
