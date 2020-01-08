import styled from 'styled-components/native'

import { TextSmallRegular, TextRegular } from '../../../../styles/typography'

export const OrderProducts = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  ${TextSmallRegular}
`

export const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ButtonTouchText = styled.Text`
  ${TextRegular};
`
export const ButtonTouch = styled.TouchableOpacity`
  padding: ${props => props.theme.metrics.spacing(0.5)};
  margin-right: ${props =>
    props.separeteRight
      ? props.theme.metrics.spacing(props.separeteRight || 1)
      : 0};
  border: 1px solid ${props => props.theme.GREY_DARK};
  border-radius: ${props => props.theme.metrics.spacing(0.8)};
`
