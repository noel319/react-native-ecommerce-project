import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { ThemeProvider } from 'styled-components/native'

import { darkTheme } from '../../src/styles/theme'
import { Container } from '../../src/styles/common'
import Button from '../../src/components/button'

storiesOf('Button', module)
  .add('with text and primary', () => (
    <ThemeProvider theme={darkTheme}>
      <Button onPress={action('Button Click')} title="Button" color="primary" />
    </ThemeProvider>
  ))
  .add('with contained and primary', () => (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Button
          onPress={action('Button Click')}
          title="Entrar"
          variant="contained"
          color="primary"
        />
      </Container>
    </ThemeProvider>
  ))
  .add('with outlined and primary', () => (
    <ThemeProvider theme={darkTheme}>
      <Button
        onPress={action('Button Click')}
        title="Button"
        variant="outlined"
        color="primary"
      />
    </ThemeProvider>
  ))
  .add('with and secondary', () => (
    <ThemeProvider theme={darkTheme}>
      <Container bgColor="secondary">
        <Button
          onPress={action('Button Click')}
          title="Button"
          color="secondary"
        />
      </Container>
    </ThemeProvider>
  ))
