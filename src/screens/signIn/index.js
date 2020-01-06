import React, { useState } from 'react'

import SignInForm from './components/signInForm'
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
      <S.SignInSafeView>
        <S.TitleSignIn>Login</S.TitleSignIn>
        <SignInForm onPress={signInSubmit} loading={loading} />
      </S.SignInSafeView>
    </S.SignIn>
  )
}

export default SignIn
