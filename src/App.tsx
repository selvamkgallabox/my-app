import { HStack, Image, Text, VStack } from '@chakra-ui/react';
import { Step, Steps } from 'chakra-ui-steps';
import { isNullishCoalesce } from 'typescript';
import EdenIcon from "./assets/Icon.svg";
import { FormStep1 } from './Components/FormStep1';
import { FormStep2 } from './Components/FormStep2';
import { FormStep3 } from './Components/FormStep3';
import { FormStep4 } from './Components/FormStep4';
import { useFormProgressData } from './Context/FormContext';






const App:React.FC =() => {
 const {activeStep} = useFormProgressData()
  return (
    <VStack px="80px" w="full" height="100vh"  >
    <VStack spacing="40px" w="600px" height='600px' bgColor='white' >
      <HStack py="40px" w="full" alignItems='center' justify='center'>
        <Image src={EdenIcon} height="20px" />
      <Text fontSize='22' fontStyle="normal" fontWeight='bold'>Eden</Text>
      </HStack>
      <HStack w="full" px="70px">
      <Steps colorScheme="purple" activeStep={activeStep} >
       <Step  />
       <Step/>
       <Step/>
       <Step/>
      </Steps>
      </HStack>
      <VStack w="full" spacing='20px'>
        {activeStep === 1 ?
        <FormStep1 /> : null}
      {activeStep === 2 ?
        <FormStep2 />
       :null }
       {activeStep === 3 ? <FormStep3 /> :null}
       {activeStep ===4 ?<FormStep4 />:null}
      </VStack>
    </VStack>
    </VStack>
  );
}




export default App;
