import { Platform } from 'react-native'

export const darkTheme = {
  mode: 'dark',
  PRIMARY_BACKGROUND_COLOR: '#2F2F2F',
  SECONDARY_BACKGROUND_COLOR: '#FBF9F7',
  PRIMARY_TEXT_COLOR: '#000000',
  SECONDARY_TEXT_COLOR: '#707070',
  PRIMARY_BUTTON_COLOR: '#C6ED3E',
  SECONDARY_BUTTON_COLOR: '#FFFFFF',
  SHADOW_COLOR: 'rgba(0,0,0, 0.11)',
  metrics: {
    statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
    spacing: {
      unit: 10,
    },
  },
}
