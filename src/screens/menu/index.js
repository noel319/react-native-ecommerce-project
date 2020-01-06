import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, View, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import * as S from './styled'

const Menu = ({ navigation }) => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken')
    const { navigate } = navigation
    navigate('Auth')
  }
  return (
    <SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
      <ScrollView>
        <View>
          <S.MenuTitleSection>Conta</S.MenuTitleSection>
          <S.MenuItemTouch onPress={handleLogout}>
            <S.MenuItemText>Sair</S.MenuItemText>
          </S.MenuItemTouch>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

Menu.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
}

export default Menu
