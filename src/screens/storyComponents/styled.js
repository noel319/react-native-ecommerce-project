import styled from 'styled-components/native'

import {
  Title as TitleStyle,
  SubTitle as SubTitleStyle,
} from '../../styles/typography'

export const StoryComponent = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.WHITE};
`

export const StoryHeader = styled.View`
  margin-bottom: ${props => props.theme.metrics.spacing(2)};
  padding-left: ${props => props.theme.metrics.spacing()};
  padding-right: ${props => props.theme.metrics.spacing()};
  padding-bottom: ${props => props.theme.metrics.spacing()};
  background-color: ${props => props.theme.GREY_DARK};
  min-height: 120px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${TitleStyle};
  color: ${props => props.theme.WHITE};
`
export const SubTitle = styled.Text`
  ${SubTitleStyle};
  color: ${props => props.theme.WHITE};
`
