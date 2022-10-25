import { Box, Button, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { HiUser, HiUserGroup } from "react-icons/hi"
import { useFormProgressData } from '../Context/FormContext'





export const FormStep3 = () => {
   const {nextStep} =useFormProgressData()

   const [selected,setSelected] =useState<boolean>(false)
   const [selectedBox,setSelectedBox] =useState<"team"|"myself">("myself")

   const handleSelect =(value:"team"| "myself") => {
    setSelectedBox(value);
    setSelected(true)
   }

   const handleSubmit =() => {
    nextStep()
   }
   

  return (
    <VStack  w="full" px="80px"  height='full'>
    <Box display='flex' flexDir='column' gap='8px' >
    <Text fontSize='22'  fontStyle="normal" fontWeight='bold'>How are you planning to use Eden ? </Text>
    <Text align="center" color="gray.500" fontSize='14px' fontStyle="normal">We'll streamline your setup experience accordingly</Text>
    </Box>
    <HStack w="full" justifyContent='space-evenly'>
       <Button  onClick={()=>handleSelect("myself") }  _hover={{color:"#664DE5",borderColor:"#664DE5"}} border='1px' borderColor='gray.100' bgColor={selectedBox ==="myself" ?"gray.100":"transparent"} w={60} h={40} ><VStack w="full">
        <Icon w="full"  as={HiUser} size="20px" />
        <Text textColor='black' fontSize='16px' fontWeight="bold">For Myself</Text>
        <Text fontSize='12px' fontWeight='normal' color='gray.500' fontStyle="normal" >Write better.Think <br /> more clearly.Stay <br /> organized</Text>
       </VStack></Button>
       <Button  onClick={()=>handleSelect("team")}  _hover={{color:"#664DE5" ,borderColor:"#664DE5"}} border='1px' borderColor='gray.100' bgColor={selectedBox ==="team" ?"gray.100" :"transparent"} w={60} h={40} ><VStack w="full">
        <Icon width="full"  as={HiUserGroup} size="20px" />
        <Text textColor='black' fontSize='16px' fontWeight="bold">With my team</Text>
        <Text fontSize='12px' fontWeight='normal' color='gray.500' fontStyle="normal" >Wikis,docs,tasks & <br /> projects,all in one <br /> place</Text>
       </VStack></Button>    </HStack>
    <Box w="full">
    <Button onClick={handleSubmit}  marginTop='20px'  type="submit"  w="full" colorScheme='purple' color='white' fontSize='14px'>Create Workspace</Button>
    </Box>
    </VStack>
  )
}
