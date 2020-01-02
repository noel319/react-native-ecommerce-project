import { Platform } from 'react-native'

export const darkTheme = {
  mode: 'dark',
  white: '#fff',
  PRIMARY_BACKGROUND_COLOR: '#F8F8F8',
  SECONDARY_BACKGROUND_COLOR: '#2F2F2F',
  TERTIARY_BACKGROUND_COLOR: '#FBF9F7',
  PRIMARY_TEXT_COLOR: '#000000',
  SECONDARY_TEXT_COLOR: '#FFFFFF',
  PRIMARY_BUTTON_COLOR: '#C6ED3E',
  SECONDARY_BUTTON_COLOR: '#FFFFFF',
  SHADOW_COLOR: 'rgba(0,0,0, 0.11)',
  metrics: {
    statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
    spacing: multiply => `${multiply * 10}px`,
  },
}
