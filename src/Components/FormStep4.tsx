import { CheckIcon } from '@chakra-ui/icons'
import { Box, Button, Circle, Icon, Text, VStack } from '@chakra-ui/react'
import { useFormProgressData } from '../Context/FormContext'

export const FormStep4 = () => {
    const {data,nextStep} =useFormProgressData()

  return (
    <VStack  w="full" px="80px"  height='full'>
    <Box display='flex' alignItems='center' flexDir='column' gap='8px' >
    <Circle size='40px' bg='purple.700' color='white'>
    <CheckIcon />
  </Circle>
    <Text fontSize='22'  fontStyle="normal" fontWeight='bold'>{`Congratulations, ${data?.fullName}!`} </Text>
    <Text align="center" color="gray.500" fontSize='14px' fontStyle="normal">You have completed onboarding,you can start using the Eden!</Text>
    <Box w="full">
      <Button colorScheme='purple' marginTop='20px' type="submit"  w="full"  color='white' fontSize='14px'>Launch Eden</Button>
      </Box>
    </Box>
    </VStack>
  )
}
