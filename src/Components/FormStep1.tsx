import React from 'react'
import { Box, Button,Text, VStack } from '@chakra-ui/react'
import { CustomInput } from './CustomInput'
import { useFormProgressData } from '../Context/FormContext'
import { FormValuesStep1, YupSchema } from '../types'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from 'react-hook-form'


const schema = yup.object().shape<YupSchema<FormValuesStep1>>({
    fullName:yup.string().trim().required("Value is required"),
    displayName:yup.string().trim().required("Value is required"),
  })
export const FormStep1 = () => {
 const {nextStep,setFormValues} = useFormProgressData();

    const {register,errors,handleSubmit} =useForm<FormValuesStep1>({
        resolver:yupResolver<FormValuesStep1>(schema)
      });

      const onSubmit = (data:FormValuesStep1) => {
       setFormValues(data);
        nextStep()
      }
  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} w="full" px="80px"  height='full'>
    <Box display='flex' flexDir='column' gap='8px' >
    <Text fontSize='22'  fontStyle="normal" fontWeight='bold'>Welcome! First things first...</Text>
    <Text align="center" color="gray.500" fontSize='14px' fontStyle="normal">You can always Change them later.</Text>
    </Box>
    <CustomInput error={errors?.fullName?.message}  labelProps={{color:"gray.500",fontSize:"14px"}}  name='fullName' register={register}  label="Full Name" placeholder='Steve Jobs'  />
    <CustomInput error={errors?.displayName?.message} labelProps={{color:"gray.500",fontSize:"14px"}} name='displayName' register={register} label="Display Name" placeholder='Steve' />
    <Box w="full">
    <Button marginTop='20px'  type="submit"  w="full" colorScheme='purple' color='white' fontSize='14px'>Create Workspace</Button>
    </Box>
    </VStack>
  )
}
