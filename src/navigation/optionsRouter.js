import React from 'react'
import IconFontAwesome5Pro from 'react-native-vector-icons/FontAwesome'

import { Colors } from '../styles/variables'

export const tabBarIcon = ({ tintColor }, routeName) => {
  switch (routeName) {
    case 'Home':
      return <IconFontAwesome5Pro name="home" size={19} color={tintColor} />
    case 'Cart':
      return (
        <IconFontAwesome5Pro name="shopping-cart" size={19} color={tintColor} />
      )
    case 'TrackOrder':
      return <IconFontAwesome5Pro name="list" size={19} color={tintColor} />
    case 'Menu':
      return <IconFontAwesome5Pro name="bars" size={19} color={tintColor} />
    default:
      return
  }
}

export const tabBarOptions = {
  activeTintColor: Colors.GREEN,
  inactiveTintColor: Colors.WHITE,
  style: {
    backgroundColor: Colors.SECONDARY_BACKGROUND_COLOR,
    height: 56,
    paddingVertical: 8,
  },
}
