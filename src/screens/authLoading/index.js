import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { delay } from '../../utils'
import * as S from './styled'

const AuthLoading = ({ navigation }) => {
  useEffect(() => {
    const bootStrapAsync = async () => {
      const { navigate } = navigation
      await delay(1100)
      const useToken = false
      navigate(useToken ? 'App' : 'Auth')
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
