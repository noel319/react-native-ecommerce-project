import { Platform } from 'react-native'

import { Colors } from './variables'

export const darkTheme = {
  mode: 'dark',
  ...Colors,
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
