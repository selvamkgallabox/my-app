import { Box, VStack,Text,Button } from '@chakra-ui/react'
import { CustomInput } from './CustomInput'
import { FormValuesStep1, FormValuesStep2, YupSchema } from '../types';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { useFormProgressData } from '../Context/FormContext';

const schema = yup.object().shape<YupSchema<FormValuesStep2>>({
    workspaceName:yup.string().trim().required("Value is required"),
    workspaceUrl:yup.string().optional()
})

export const FormStep2 = () => {
   const {setFormValues,nextStep} =useFormProgressData()
    const {register,errors,handleSubmit} =useForm<FormValuesStep2>({
        resolver:yupResolver<FormValuesStep2>(schema)
      });


      const onSubmit = (data:FormValuesStep2) => {
        setFormValues(data);
        nextStep()
      }

  return (
    <VStack as='form' onSubmit={handleSubmit(onSubmit)} px="80px" w="full" height='full'>
    <Box display='flex' flexDir='column' marginBottom="20px"  gap='8px' >
      <Text fontSize='22'  fontStyle="normal" fontWeight='bold'>Let's set up a home for all your work</Text>
      <Text align="center" color="gray.500" fontSize='14px' fontStyle="normal">You can always Create another Workspace later.</Text>
      </Box>
    <CustomInput error={errors?.workspaceName?.message}  labelProps={{color:"gray.500",fontSize:"14px"}}  name='workspaceName' register={register}  label="Workspace Name" placeholder='Eden'  />
      <CustomInput inputLeftElement={<Box  borderRadius='6px 2px 2px 6px' bgColor='gray.100'><Text color='gray.500' paddingTop='10px' px="3px" fontSize='14px'>www.eden.com/</Text></Box>}  labelProps={{color:"gray.500",fontSize:"14px"}} name='WorkspaceUrl' register={register} label="Workspace URL(Optional)" placeholder='Example' />
      <Box w="full">
      <Button  marginTop='20px' type="submit"  w="full" colorScheme='purple' color='white' fontSize='14px'>Create Workspace</Button>
      </Box>
      </VStack>
  )
}
