import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import NavigationService from '../../../navigation/navigationService'
import * as S from './styled'

const modeColor = {
  light: '#fff',
  dark: '#222',
}

const HeaderDefault = ({ mode }) => {
  return (
    <S.HeaderDefault>
      <S.TouchableOpacity
        onPress={() => {
          NavigationService.goBack()
        }}
      >
        <Icon color={modeColor[mode]} size={30} name="arrow-left" />
      </S.TouchableOpacity>
    </S.HeaderDefault>
  )
}

HeaderDefault.defaultProps = {
  mode: 'dark',
}

HeaderDefault.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']),
}

export default HeaderDefault
