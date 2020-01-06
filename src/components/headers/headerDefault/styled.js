import styled from 'styled-components/native'

export const HeaderDefault = styled.TouchableOpacity`
  padding-top: ${props => props.theme.metrics.spacing(1)};
  padding-right: ${props => props.theme.metrics.spacing(0.8)};
  padding-left: ${props => props.theme.metrics.spacing(0.8)};
  padding-bottom: ${props => props.theme.metrics.spacing(1)};
  align-items: flex-start;
`
export const TouchableOpacity = styled.TouchableOpacity`
  padding: ${props => props.theme.metrics.spacing(0.5)};
`
