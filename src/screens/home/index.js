import React from 'react'
import { SafeAreaView, View, Text, ImageBackground } from 'react-native'

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
        <S.Content
        // style={{
        //   position: 'absolute',
        //   top: 0,
        //   left: 0,
        //   right: 0,
        //   bottom: 0,
        // }}
        >
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

export default Home
