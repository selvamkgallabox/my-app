import React from 'react';
import { FormControl, FormControlProps, FormLabel, FormLabelProps, InputGroup, InputProps, InputRightElement,Input as ChakraInput, Button, FormHelperText, FormErrorMessage } from '@chakra-ui/react';
import {useForm,ValidationRule} from "react-hook-form"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";




interface FormInputProps extends InputProps {
    label?: string | JSX.Element;
    labelProps?: Partial<FormLabelProps>;
    formControlProps?: Partial<FormControlProps>;
    name: string;
    helpText?: string;
    showPassword?: boolean;
    required?: boolean;
    error?: string;
    hidelabel?: boolean;
    register: ReturnType<typeof useForm>["register"];
    registerProps?: ValidationRule;
    elementRef?: React.MutableRefObject<HTMLInputElement | null>;
    inputLeftElement?: React.ReactElement;
    inputRightElement?: React.ReactElement;
    spacingY?: string;
}

export const CustomInput:React.FC<FormInputProps> = (props) => {
    const {
        name,
        label,
        labelProps = {},
        formControlProps = {},
        helpText,
        showPassword = false,
        type,
        error,
        borderColor = "gray.200",
        required = false,
        registerProps = {},
        register,
        elementRef,
        inputLeftElement,
        inputRightElement,
        ...otherProps
    } = props;
    const [showPasswordAsText, setShowPasswordAsText] = React.useState<boolean>(false);
    const [canShowPassword] = React.useState<boolean>(type === "password" && showPassword);
    const toggleShowPasswordAsText = () => setShowPasswordAsText(!showPasswordAsText);
  return (
    <FormControl isInvalid={error != null} id={name} isRequired={required} {...formControlProps}>
    {label ? (
        <FormLabel mb={1} {...labelProps}>
            {label}
        </FormLabel>
    ) : null}
    <InputGroup>
        {inputLeftElement}
        <ChakraInput
            ref={(e) => {
                register(registerProps,)(e);
                if (elementRef) {
                    elementRef.current = e;
                }
            }}
            borderColor={borderColor}
            name={name}
            errorBorderColor="red.300"
            {...otherProps}
            type={canShowPassword ? (showPasswordAsText ? "text" : "password") : type}
        />
        {canShowPassword ? (
            <InputRightElement pr="1">
                <Button h="1.75rem" size="sm" onClick={toggleShowPasswordAsText}>
                    {showPasswordAsText ? <ViewIcon fontSize="1.2rem" /> : <ViewOffIcon fontSize="1.2rem" />}
                </Button>
            </InputRightElement>
        ) : (
            inputRightElement
        )}
    </InputGroup>
    {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
</FormControl>
  )
}
