import styled from 'styled-components/native'

import {} from './fonts'

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: ${props => props.theme.metrics.spacing(2)};
  background-color: ${props =>
    (props.bgColor === 'primary' && props.theme.PRIMARY_BACKGROUND_COLOR) ||
    (props.bgColor === 'secondary' && props.theme.SECONDARY_BACKGROUND_COLOR) ||
    (!props.bgColor && props.theme.white)};
`
