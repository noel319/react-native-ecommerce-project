import styled from 'styled-components/native'

import { fontFamily, fontSize, fontWeight } from '../../styles/fonts'

export const ButtonText = styled.Text`
  color: ${props =>
    (props.variant === 'outlined' && props.theme.PRIMARY_BUTTON_COLOR) ||
    (props.color === 'primary' && props.theme.PRIMARY_TEXT_COLOR) ||
    (props.color === 'secondary' && props.theme.SECONDARY_TEXT_COLOR)};
  font-family: ${fontFamily.RobotoMedium};
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.medium};
`

export const Button = styled.TouchableOpacity`
  width: ${props => (props.fullscreen ? '100%' : 'auto')};
  background: ${props => {
    if (props.disabled) {
      return props.theme.INACTIVE
    }
    return props.variant === 'contained'
      ? props.theme.PRIMARY_BUTTON_COLOR
      : 'transparent'
  }};
  border: ${props =>
    props.variant === 'outlined'
      ? `2px solid ${props.theme.PRIMARY_BUTTON_COLOR}`
      : 'none'};
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`
// (props.variant === 'outlined' && props.theme.PRIMARY_BUTTON_COLOR) ||
