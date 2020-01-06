import styled from 'styled-components/native'

import { TextSmall, TextRegular } from '../../styles/typography'

export const TextField = styled.View`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  margin-bottom: ${props => props.theme.metrics.spacing(2.5)};
  ${TextRegular};
  width: 100%;
`
export const Label = styled.Text`
  ${TextRegular};
  margin-bottom: ${props => props.theme.metrics.spacing(0.3)};
`
export const TextInput = styled.TextInput`
  background-color: ${props => props.theme.WHITE};
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  min-height: 46px;
  border-radius: 8px;
  margin-bottom: ${props => props.theme.metrics.spacing(0.3)};
  padding-left: ${props => props.theme.metrics.spacing()};
  padding-right: ${props => props.theme.metrics.spacing()};
  ${props => props.theme.shadowGeneration()}
`
export const TextHelper = styled.Text`
  color: ${props =>
    props.error ? props.theme.ERROR : props.theme.PRIMARY_TEXT_COLOR};
  ${TextSmall};
`
