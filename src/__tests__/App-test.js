import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { fireEvent, render, wait } from '@testing-library/react-native'
import 'utils/test-utils'

function Example() {
  const [name, setUser] = React.useState('')
  const [show, setShow] = React.useState(false)

  return (
    <View>
      <TextInput value={name} onChangeText={setUser} testID="input" />
      <Button
        title="Print Username"
        onPress={() => {
          setTimeout(() => {
            setShow(!show)
          }, Math.floor(Math.random() * 200))
        }}
      />
      {show && <Text testID="printed-username">{name}</Text>}
    </View>
  )
}

test('examples of some things', async () => {
  // Test to confirm if the switch test run
  const { getByTestId, getByText, queryByTestId, baseElement } = render(
    <Example />,
  )
  const famousWomanInHistory = 'Jeftar'

  const input = getByTestId('input')
  fireEvent.changeText(input, famousWomanInHistory)

  const button = getByText('Print Username')
  fireEvent.press(button)

  await wait(() => expect(queryByTestId('printed-username')).toBeTruthy())

  expect(getByTestId('printed-username').props.children).toBe(
    famousWomanInHistory,
  )
  expect(baseElement).toMatchSnapshot()
})
