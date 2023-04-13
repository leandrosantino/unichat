import React from 'react'
import { Box, Button, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type SteckParamsList = {
  contact: undefined
}

type SteckProps = NativeStackScreenProps<SteckParamsList, "contact">

type Props = {
  routes: SteckProps
}

export function ChatList() {

  const { navigate } = useNavigation()

  return (
    <Box
      bg={'primary.900'}
      w={'full'}
      h={'full'}
    >
      <Button
        variant={'ghost'}
        w={'40'}
        colorScheme={'primary'}
        onPress={() => {
          navigate('contact')
        }}
      >
        Open Chat
      </Button>
    </Box>
  )
}
