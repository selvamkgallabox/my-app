import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FormContext } from './Context/FormContext';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement

);

const theme = extendTheme({
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Inter, Georgia, serif",
},
  components: {
    Steps,
  },
});
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <FormContext/>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

