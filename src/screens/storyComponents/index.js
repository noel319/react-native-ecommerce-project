import React from 'react'

import { HeaderModal } from '../../components/headers'
import StorybookUI from '../../../storybook'

import * as S from './styled'

const StoryComponents = () => {
  return (
    <S.StoryComponent>
      <HeaderModal />
      <S.StoryHeader>
        <S.Title>Storybook Components</S.Title>
        <S.SubTitle>Story this Ecommerce</S.SubTitle>
      </S.StoryHeader>
      <StorybookUI />
    </S.StoryComponent>
  )
}

export default StoryComponents
