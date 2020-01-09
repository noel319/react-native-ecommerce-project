import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

export const { CardHeader, CardBody, CardFooter } = S

const Card = ({ children, variant }) => (
  <S.Card variant={variant}>{children}</S.Card>
)

Card.defaultProps = {
  children: null,
  variant: null,
}

Card.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
}
export default Card
