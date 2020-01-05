import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const TextField = ({
  onChangeText,
  name,
  value,
  placeholder,
  keyboardType,
  label,
  error,
  textHelper,
  ...rest
}) => {
  return (
    <S.TextField>
      {label && <S.Label>{label}</S.Label>}
      <S.TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        name={name}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        {...rest}
      />
      {textHelper && <S.TextHelper error={error}>{textHelper}</S.TextHelper>}
    </S.TextField>
  )
}

TextField.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  value: '',
  label: null,
  textHelper: null,
  error: false,
}
TextField.propTypes = {
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  keyboardType: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  textHelper: PropTypes.string,
}
export default TextField
