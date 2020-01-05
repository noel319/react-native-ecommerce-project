import styled from 'styled-components/native'

import { TextSmall, TextRegular } from '../../styles/typography'

export const TextField = styled.View`
  background-color: ${props => props.theme.WHITE};
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  margin-bottom: ${props => props.theme.metrics.spacing()};
  ${TextRegular};
  width: 100%;
`
export const Label = styled.Text`
  ${TextRegular};
  margin-bottom: ${props => props.theme.metrics.spacing(0.2)};
`
export const TextInput = styled.TextInput`
  background-color: ${props => props.theme.WHITE};
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  min-height: 46px;
  border-radius: 8px;
  margin-bottom: ${props => props.theme.metrics.spacing(0.2)};
  padding-left: ${props => props.theme.metrics.spacing()};
  padding-right: ${props => props.theme.metrics.spacing()};
  ${props => props.theme.shadowGeneration()}
`
export const TextHelper = styled.Text`
  color: ${props =>
    props.error ? props.theme.ERROR : props.theme.PRIMARY_TEXT_COLOR};
  ${TextSmall};
`
