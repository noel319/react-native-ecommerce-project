import React from 'react'
import PropTypes from 'prop-types'
import { Platform, KeyboardAvoidingView } from 'react-native'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import TextField from '../../../../components/textField'
import Button from '../../../../components/button'
import { NavigationService } from '../../../../navigation'
import * as S from './styled'

const signInSchema = Yup.object().shape({
  password: Yup.string().required('Obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Obrigatório'),
})

const SignInForm = ({ onPress, loading }) => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: signInSchema,
    onSubmit: onPress,
  })
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <TextField
        name="email"
        onChangeText={handleChange('email')}
        value={values.email}
        placeholder="Seu e-mail"
        error={Boolean(errors.email)}
        textHelper={errors.email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextField
        name="password"
        onChangeText={handleChange('password')}
        value={values.password}
        error={Boolean(errors.password)}
        textHelper={errors.password}
        placeholder="Sua senha"
        secureTextEntry
        autoCapitalize="none"
      />
      <S.ViewButton>
        <Button
          onPress={handleSubmit}
          title={loading ? 'Aguarde..' : 'Login'}
          variant="contained"
          color="primary"
          disabled={loading}
          fullscreen
        />
      </S.ViewButton>
      <Button
        onPress={() => {
          NavigationService.navigate('SignUp')
        }}
        title="Cadastrar"
        color="secondary"
        fullscreen
      />
    </KeyboardAvoidingView>
  )
}

SignInForm.defaultProps = {
  loading: false,
}

SignInForm.propTypes = {
  onPress: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

export default SignInForm
