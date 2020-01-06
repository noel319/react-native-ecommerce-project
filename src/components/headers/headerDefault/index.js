import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as S from './styled'

import NavigationService from '../../../navigation/navigationService'

const HeaderDefault = () => {
  return (
    <S.TouchableOpacity
      onPress={() => {
        NavigationService.goBack()
      }}
    >
      <Icon color="#fff" size={30} name="arrow-left" />
    </S.TouchableOpacity>
  )
}

export default HeaderDefault
