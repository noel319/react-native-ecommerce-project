import styled from 'styled-components/native'

import { Title as TitleStyle } from '../../styles/typography'

export const Title = styled.Text`
  ${TitleStyle};
  margin-bottom: ${props => props.theme.metrics.spacing()};
`

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.WHITE};
`

export const Header = styled.View`
  margin-top: ${props => props.theme.metrics.spacing(2)};
  margin-bottom: ${props => props.theme.metrics.spacing(1.5)};
  padding: ${props => props.theme.metrics.spacing()};
`

export const listProduct = {
  marginVertical: 15,
}
