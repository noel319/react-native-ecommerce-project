import { Platform } from 'react-native'

export const darkTheme = {
  mode: 'dark',
  WHITE: '#fff',
  GREY_DARK: '#707070',
  PRIMARY_BACKGROUND_COLOR: '#F8F8F8',
  SECONDARY_BACKGROUND_COLOR: '#2F2F2F',
  TERTIARY_BACKGROUND_COLOR: '#FBF9F7',
  PRIMARY_TEXT_COLOR: '#000000',
  SECONDARY_TEXT_COLOR: '#FFFFFF',
  PRIMARY_BUTTON_COLOR: '#C6ED3E',
  SECONDARY_BUTTON_COLOR: '#FFFFFF',
  SHADOW_COLOR: 'rgba(0,0,0, 0.11)',
  ERROR: '#f55050',
  INACTIVE: '#878EA0',
  SUCCESS: '#44bd13',
  metrics: {
    statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
    spacing: (multiply = 1) => `${multiply * 10}px`,
  },
  shadowGeneration: (options = {}) => {
    const optionsDefault = {
      shadowColor: this.SHADOW_COLOR,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      ...options,
    }
    return `
    shadowColor: ${optionsDefault.shadowColor};
    shadowOffset: {
      width: ${optionsDefault.shadowOffset.width};
      height: ${optionsDefault.shadowOffset.height};
    };
    shadowOpacity: ${optionsDefault.shadowOpacity};
    shadowRadius: ${optionsDefault.shadowRadius};
    elevation: ${optionsDefault.elevation};
    `
  },
}
