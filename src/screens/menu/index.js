import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, View, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import * as S from './styled'

const Menu = ({ navigation }) => {
  const { navigate } = navigation

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken')
    navigate('Auth')
  }

  const handleStory = async () => {
    navigate('StoryComponents')
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <S.MenuTitleSection>Conta</S.MenuTitleSection>
          <S.MenuItemTouch onPress={handleLogout}>
            <S.MenuItemText>Sair</S.MenuItemText>
          </S.MenuItemTouch>
        </View>
        <View>
          <S.MenuTitleSection>For Developer</S.MenuTitleSection>
          <S.MenuItemTouch onPress={handleStory}>
            <S.MenuItemText>Storybook Components</S.MenuItemText>
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
