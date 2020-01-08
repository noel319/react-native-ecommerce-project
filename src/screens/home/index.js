import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native'

import images from '../../utils/images'
import Button from '../../components/button'
import * as S from './styled'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <S.Home source={images.homeBg}>
        <S.Content>
          <S.Logo source={images.logo} />
          <S.Description>
            Encontre os melhores produtos com os melhores preços
          </S.Description>
          <Button
            title="Login"
            color="secondary"
            onPress={() => navigation.navigate('SignIn')}
          />
          <Button
            title="Cadastrar"
            variant="contained"
            onPress={() => navigation.navigate('SignUp')}
          />
        </S.Content>
      </S.Home>
    </SafeAreaView>
  )
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

export default Home
