import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Button = ({ onPress, title, variant, color }) => {
  return (
    <S.Button variant={variant} color={color} onPress={onPress}>
      <S.ButtonText variant={variant} color={color}>
        {title}
      </S.ButtonText>
    </S.Button>
  )
}

export default Button

Button.defaultProps = {
  children: null,
  variant: null,
  color: 'primary',
  onPress: () => {},
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
}
