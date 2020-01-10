import React, { useState } from 'react'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import authService from '../../services/authService'
import { HeaderDefault } from '../../components/headers'
import { NavigationService } from '../../navigation'
import SignUpForm from './components/signUpForm'
import * as S from './styled'

const SignUp = () => {
  const [loading, setLoading] = useState(false)
  const signUpSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true)
      const { data } = await authService.register(values)
      await AsyncStorage.setItem('userToken', data.token)
      setLoading(false)
      Alert.alert('Sucesso', 'Cadastro efetuado com sucesso.')
      resetForm()
      NavigationService.navigate('App')
    } catch ({ response }) {
      setLoading(false)
      if (response) {
        const { data } = response
        Alert.alert('Informação', data.error)
      }
    }
  }

  return (
    <S.SignUp contentInsetAdjustmentBehavior="automatic">
      <HeaderDefault mode="light" />
      <S.SignInSafeView>
        <S.TitleSignUp>Cadastro</S.TitleSignUp>
        <SignUpForm onPress={signUpSubmit} loading={loading} />
      </S.SignInSafeView>
    </S.SignUp>
  )
}

export default SignUp
