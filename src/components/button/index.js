import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Button = ({ onPress, title, variant, color, fullscreen, ...rest }) => {
  return (
    <S.Button
      fullscreen={fullscreen}
      variant={variant}
      color={color}
      onPress={onPress}
      {...rest}
    >
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
  fullscreen: false,
  color: 'primary',
  onPress: () => {},
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['contained', 'outlined']),
  color: PropTypes.string,
  onPress: PropTypes.func,
  fullscreen: PropTypes.bool,
  title: PropTypes.string.isRequired,
}
