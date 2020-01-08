import styled from 'styled-components/native'

import { TextRegular } from '../../styles/typography'
import { Colors } from '../../styles/variables'

export const Loading = styled.View`
  margin: ${props => props.theme.metrics.spacing(2)};
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: Colors.GREEN,
})``

export const Title = styled.Text`
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
  ${TextRegular};
`
