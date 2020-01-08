import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Loading = ({ title }) => {
  return (
    <S.Loading>
      <S.ActivityIndicator />
      {title && <S.Title>{title}</S.Title>}
    </S.Loading>
  )
}

Loading.defaultProps = {
  title: '',
}

Loading.propTypes = {
  title: PropTypes.string,
}

export default Loading
