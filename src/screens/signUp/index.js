import React from 'react'

import { HeaderDefault } from '../../components/headers'
import SignUpForm from './components/signUpForm'
import * as S from './styled'

const SignUp = () => {
  const signUpSubmit = values => {
    console.log(values)
  }
  return (
    <S.SignUp contentInsetAdjustmentBehavior="automatic">
      <HeaderDefault mode="light" />
      <S.SignInSafeView>
        <S.TitleSignUp>Cadastro</S.TitleSignUp>
        <SignUpForm onPress={signUpSubmit} />
      </S.SignInSafeView>
    </S.SignUp>
  )
}

export default SignUp
