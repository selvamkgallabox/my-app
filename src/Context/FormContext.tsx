import React, { createContext, useContext, useState } from 'react'
import {useSteps} from "chakra-ui-steps";
import App from '../App';


interface FormSet {
    fullName:string;
    displayName:string;
    workspaceName:string;
    workspaceUrl?:string

}
const formDefault ={
    fullName:"",
    displayName:"",
    workspaceName:"",
    workspaceUrl:""

}
const defaultValues :IProgressContext={
   activeStep:0,
   data:formDefault,
   nextStep:() => {},
   setFormValues:(values:any) => {}
}

interface IProgressContext {
   setFormValues:(values:any) => void;
   activeStep:number;
   nextStep:() => void;
   data:FormSet;

}

export const ProgressContext = createContext<IProgressContext>(defaultValues)

export const FormContext = () => {
    const [data,setData] =useState<FormSet>(formDefault)
    const { nextStep,activeStep } = useSteps({
        initialStep:1,
      });

      const setFormValues = (values:any) => {
        setData((prevValues) => ({
          ...prevValues,
          ...values,
        }));
      };
   
  return (
    <ProgressContext.Provider value={{setFormValues,activeStep
    ,nextStep,data}}><App /></ProgressContext.Provider>
  )
}

export const useFormProgressData = () => useContext<IProgressContext>(ProgressContext);

