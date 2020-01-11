import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import TextField from '../../../../components/textField'
import Button from '../../../../components/button'
import { NavigationService } from '../../../../navigation'
import * as S from './styled'

const signUpSchema = Yup.object().shape({
  password: Yup.string().required('Obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Obrigatório'),
})

const SignUpForm = ({ onPress, loading }) => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: signUpSchema,
    onSubmit: onPress,
  })
  return (
    <View>
      <TextField
        name="email"
        onChangeText={handleChange('email')}
        value={values.email}
        error={Boolean(errors.email)}
        textHelper={errors.email}
        autoCapitalize="none"
        placeholder="Seu e-mail"
        keyboardType="email-address"
      />
      <TextField
        name="password"
        onChangeText={handleChange('password')}
        value={values.password}
        error={Boolean(errors.password)}
        textHelper={errors.password}
        autoCapitalize="none"
        placeholder="digite uma senha"
        secureTextEntry
      />
      <S.ViewButton>
        <Button
          onPress={handleSubmit}
          title={loading ? 'Aguarde..' : 'Cadastro'}
          variant="contained"
          disabled={loading}
          color="primary"
          fullscreen
        />
      </S.ViewButton>
      <Button
        onPress={() => {
          NavigationService.navigate('SignIn')
        }}
        title="Login"
        color="secondary"
        fullscreen
      />
    </View>
  )
}

SignUpForm.defaultProps = {
  loading: false,
}

SignUpForm.propTypes = {
  onPress: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

export default SignUpForm
