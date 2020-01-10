import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
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
    initialValues: { email: 'eve.holt@reqres.in', password: 'cityslicka' },
    validationSchema: signInSchema,
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
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextField
        name="password"
        onChangeText={handleChange('password')}
        value={values.password}
        error={Boolean(errors.password)}
        textHelper={errors.password}
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
    </View>
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
