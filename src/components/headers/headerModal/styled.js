import styled from 'styled-components/native'

export const HeaderModal = styled.View`
  padding-top: ${props => props.theme.metrics.spacing(1)};
  padding-right: ${props => props.theme.metrics.spacing(0.8)};
  padding-left: ${props => props.theme.metrics.spacing(0.8)};
  padding-bottom: ${props => props.theme.metrics.spacing(1)};
  align-items: flex-end;
`
export const TouchableOpacity = styled.TouchableOpacity`
  padding: ${props => props.theme.metrics.spacing(0.5)};
`
