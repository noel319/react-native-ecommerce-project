import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { NavigationService } from '../../../navigation'
import * as S from './styled'

const HeaderModal = () => (
  <S.HeaderModal>
    <TouchableOpacity
      onPress={() => {
        NavigationService.goBack()
      }}
    >
      <Icon color="#222" size={30} name="close" />
    </TouchableOpacity>
  </S.HeaderModal>
)

export default HeaderModal
