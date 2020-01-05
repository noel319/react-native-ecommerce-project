import styled, { css } from 'styled-components/native'

const cardStyled = css`
  padding: ${props => props.theme.metrics.spacing(2)};
`

export const Card = styled.View`
  background-color: ${props =>
    props.variant === 'dark' ? props.theme.GREY_DARK : props.theme.WHITE};
`

export const CardHeader = styled.View`
  ${cardStyled}
`

export const CardBody = styled.View`
  ${cardStyled}
`

export const CardFooter = styled.View`
  ${cardStyled}
`
