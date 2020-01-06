import styled from 'styled-components/native'

import { TextMedium, TextRegular } from '../../styles/typography'

export const MenuTitleSection = styled.Text`
  background-color: ${props => props.theme.TERTIARY_BACKGROUND_COLOR};
  padding: ${props => props.theme.metrics.spacing(1.5)};
  ${TextMedium};
`
export const MenuItemTouch = styled.TouchableOpacity`
  padding: ${props => props.theme.metrics.spacing(1.5)};
`

export const MenuItemText = styled.Text`
  ${TextRegular};
`
