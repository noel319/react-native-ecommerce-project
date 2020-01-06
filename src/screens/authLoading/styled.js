import styled from 'styled-components/native'

import { TextRegular } from '../../styles/typography'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: ${props => props.theme.metrics.spacing(0.5)};
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.SECONDARY_BACKGROUND_COLOR};
`
export const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#C6ED3E',
})``

export const Title = styled.Text`
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
  ${TextRegular};
`
