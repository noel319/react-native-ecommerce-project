import styled from 'styled-components/native'

import { Title } from '../../styles/typography'

export const SignUp = styled.ScrollView`
  padding-left: ${props => props.theme.metrics.spacing()};
  padding-right: ${props => props.theme.metrics.spacing()};
  background-color: ${props => props.theme.SECONDARY_BACKGROUND_COLOR};
`
export const TitleSignUp = styled.Text`
  ${Title};
  color: ${props => props.theme.WHITE};
`
