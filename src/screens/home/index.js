import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, ImageBackground } from 'react-native'

import images from '../../utils/images'
import Button from '../../components/button'
import * as S from './styled'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={images.homeBg}
        style={{ width: '100%', height: '100%' }}
      >
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
      </ImageBackground>
    </SafeAreaView>
  )
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

export default Home
