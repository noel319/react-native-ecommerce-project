import React from 'react'
import { SafeAreaView, Text, ScrollView } from 'react-native'

import SignUpForm from './components/signUpForm'

const SignUp = () => {
  const signUpSubmit = values => {
    console.log(values)
  }
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView>
        <Text>Cadastro</Text>
        <SignUpForm onPress={signUpSubmit} />
      </SafeAreaView>
    </ScrollView>
  )
}

export default SignUp
