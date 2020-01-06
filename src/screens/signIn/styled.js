import styled from 'styled-components/native'

import { Title } from '../../styles/typography'

export const SignIn = styled.ScrollView`
  background-color: ${props => props.theme.SECONDARY_BACKGROUND_COLOR};
`

export const SignInSafeView = styled.SafeAreaView`
  padding-left: ${props => props.theme.metrics.spacing(2)};
  padding-right: ${props => props.theme.metrics.spacing(2)};
`
export const TitleSignIn = styled.Text`
  ${Title};
  text-align: center;
  color: ${props => props.theme.WHITE};
  margin-top: ${props => props.theme.metrics.spacing(2)};
  margin-bottom: ${props => props.theme.metrics.spacing(2)};
`
