import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'

import SignInForm from './components/signInForm'
import HeaderDefault from '../../components/headers/headerDefault'
import { delay } from '../../utils'
import * as S from './styled'

const SignIn = () => {
  const [loading, setLoading] = useState(false)
  const signInSubmit = async (values, { su }) => {
    try {
      setLoading(true)
      await delay()
      console.log(values)
      setLoading(false)
    } catch (error) {}
  }
  return (
    <S.SignIn contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView>
        <HeaderDefault />
        <S.TitleSignIn>Login</S.TitleSignIn>
        <SignInForm onPress={signInSubmit} loading={loading} />
      </SafeAreaView>
    </S.SignIn>
  )
}

export default SignIn
