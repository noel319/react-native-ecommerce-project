import React from 'react'
import { Text } from 'react-native'
import { storiesOf, addDecorator } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { ThemeProvider } from 'styled-components/native'

import { darkTheme } from '../../src/styles/theme'
import { Container } from '../../src/styles/common'
import Button from '../../src/components/button'
import TextField from '../../src/components/textField'
import Card, {
  CardBody,
  CardHeader,
  CardFooter,
} from '../../src/components/card'

const decorationTheme = storyFn => (
  <ThemeProvider theme={darkTheme}>{storyFn()}</ThemeProvider>
)

addDecorator(decorationTheme)

storiesOf('Button', module)
  .add('text and primary', () => (
    <Button onPress={action('Button Click')} title="Button" color="primary" />
  ))
  .add('contained and primary', () => (
    <Container>
      <Button
        onPress={action('Button Click')}
        title="Entrar"
        variant="contained"
        color="primary"
      />
    </Container>
  ))
  .add('contained, primary and fullscreen', () => (
    <Container>
      <Button
        onPress={action('Button Click')}
        title="Entrar"
        variant="contained"
        color="primary"
        fullscreen
      />
    </Container>
  ))
  .add('outlined and primary', () => (
    <Button
      onPress={action('Button Click')}
      title="Button"
      variant="outlined"
      color="primary"
      fullscreen
    />
  ))
  .add('secondary', () => (
    <Container bgColor="secondary">
      <Button
        onPress={action('Button Click')}
        title="Button"
        color="secondary"
        fullscreen
      />
    </Container>
  ))

storiesOf('TextField', module)
  .add('default', () => (
    <TextField label="Name" name="name" value="Jeftar Mascarenhas" />
  ))
  .add('phone input', () => (
    <TextField
      label="Phone"
      keyboardType="phone-pad"
      value="(81) 98447-0323"
      name="phone"
    />
  ))
  .add('password input text help', () => (
    <TextField
      type="password"
      textHelper="A senha deve conter 6 carcteres"
      value="123456"
      name="phone"
      secureTextEntry
    />
  ))
  .add('validation input e-mail', () => (
    <TextField
      label="E-mail"
      value="jeftarmascarenhas@test.com"
      name="email"
      keyboardType="email-address"
      textHelper="'E-mail invalido"
      error
    />
  ))

storiesOf('Card', module)
  .add('default', () => (
    <Card>
      <CardBody>
        <Text>Card Body</Text>
      </CardBody>
    </Card>
  ))
  .add('body Header', () => (
    <Card>
      <CardHeader>
        <Text>Card Header</Text>
      </CardHeader>
      <CardBody>
        <Text>Card Body</Text>
      </CardBody>
    </Card>
  ))
  .add('body Header and Footer', () => (
    <Card>
      <CardHeader>
        <Text>Card Header</Text>
      </CardHeader>
      <CardBody>
        <Text>Card Body</Text>
      </CardBody>
      <CardFooter>
        <Text>Card Body</Text>
      </CardFooter>
    </Card>
  ))
  .add('body Header and Footer', () => (
    <Card variant="dark">
      <CardBody>
        <Text>Card Body</Text>
      </CardBody>
    </Card>
  ))
