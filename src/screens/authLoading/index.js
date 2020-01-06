import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import AsyncStorage from '@react-native-community/async-storage'

import { delay } from '../../utils'
import * as S from './styled'

const AuthLoading = ({ navigation }) => {
  useEffect(() => {
    const bootStrapAsync = async () => {
      try {
        const { navigate } = navigation
        await delay(1100)
        const useToken = await AsyncStorage.getItem('userToken')
        navigate(useToken ? 'App' : 'Auth')
      } catch (error) {
        console.log(error)
      }
    }
    bootStrapAsync()
  })

  return (
    <S.Container>
      <S.ActivityIndicator />
      <S.Title>Aguarde</S.Title>
    </S.Container>
  )
}

AuthLoading.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
}
export default AuthLoading
