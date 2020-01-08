import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

import { TextMediumExtra } from '../../styles/typography'

const { width, height } = Dimensions.get('window')

export const Home = styled.ImageBackground`
  width: ${width};
  height: ${height};
`

export const Logo = styled.Image`
  width: 134px;
  height: 106px;
`

export const Content = styled.View`
  padding: ${props => props.theme.metrics.spacing(2.5)};
  flex: 1;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.theme.SHADOW_COLOR};
`

export const Description = styled.Text`
  color: ${props => props.theme.WHITE};
  ${TextMediumExtra};
`
