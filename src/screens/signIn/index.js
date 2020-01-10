import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import authService from '../../services/authService'
import SignInForm from './components/signInForm'
import { HeaderDefault } from '../../components/headers'
import * as S from './styled'

const SignIn = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const signInSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true)
      const { data } = await authService.login(values)
      await AsyncStorage.setItem('userToken', data.token)
      setLoading(false)
      resetForm()
      navigation.navigate('App')
    } catch ({ response }) {
      setLoading(false)
      if (response) {
        const { data } = response
        Alert.alert('Informação', data.error)
      }
    }
  }

  return (
    <S.SignIn contentInsetAdjustmentBehavior="automatic">
      <HeaderDefault mode="light" />
      <S.SignInSafeView>
        <S.TitleSignIn>Login</S.TitleSignIn>
        <SignInForm onPress={signInSubmit} loading={loading} />
      </S.SignInSafeView>
    </S.SignIn>
  )
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
}
export default SignIn
