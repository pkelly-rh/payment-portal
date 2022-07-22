import React, { useCallback } from "react";
import {
  FormControlLabel,
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputAdornment,
  Theme,
  Typography,
  useMediaQuery,
  Hidden,
  useTheme,
  Container,
  RadioGroup,
  ThemeProvider
} from "@material-ui/core";
import { RHLogo } from "@rh-estore-ui/component-rh-logo";
import { FirstNameField } from "@rh-estore-ui/component-standard-fields";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from "react-hook-form";
import { RHFormTextField } from "component-rh-text-field";
import theme from "@rh-estore-ui/theme";
import AdyenComponentNew from "component-adyen-new";

interface FormFields {
  firstName: string
}


const CustomInput = () => {
  const {control} = useFormContext()
  console.log({control})
  return <input placeholder="my-input"></input>
}

const App = (): React.ReactElement => {
  const methods = useForm<FormFields>({
    defaultValues: {
      firstName: ""
    }
  });
  
  const onSubmit = useCallback(() => {
    console.log("submit")
  }, [])

  // const theme = useTheme()
  // console.log("theme?", theme?.fontSizes)

  return (
    <ThemeProvider theme={theme({
      brand: "RH",
    })}>
      <div className="app">
        <h1
          style={{
            color: "gold",
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
            textAlign: "center",
          }}
        >
          PAYMENT PORTAL

        </h1>
        <p>
          {`My var = ${process.env.MY_VARIABLE}`}
        </p>
        <AdyenComponentNew
            showValidation={true}
            componentType={null}
            setCreditCardType={() => {}}
            selectedCardBrand={null}
            onEncryptedData={() => {}}
          />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {/* <CustomInput/> */}
            {/* <FirstNameField /> */}
            <RHFormTextField control={methods.control} name="firstName" placeholder="First Name"/>
            {/* <input placeholder="name"></input> */}
          </form>
        </FormProvider>
      </div>
    </ThemeProvider>
  );
};
export default App;
