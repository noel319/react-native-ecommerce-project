import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import TextField from '../../../../components/textField'
import Button from '../../../../components/button'

const signUpSchema = Yup.object().shape({
  password: Yup.string().required('Obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Obrigatório'),
})

const SignUpForm = ({ onPress }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={signUpSchema}
      onSubmit={onPress}
      render={({ handleSubmit, handleChange, values, errors }) => (
        <View>
          <TextField
            name="email"
            onChangeText={handleChange('email')}
            value={values.email}
            error={Boolean(errors.email)}
            textHelper={errors.email}
            keyboardType="email-address"
          />
          <TextField
            name="password"
            onChangeText={handleChange('email')}
            value={values.email}
            error={Boolean(errors.email)}
            textHelper={errors.email}
            secureTextEntry
          />
          <Button onPress={handleSubmit} title="Button" color="primary" />
        </View>
      )}
    />
  )
}

SignUpForm.propTypes = {
  onPress: PropTypes.func.isRequired,
}
export default SignUpForm
