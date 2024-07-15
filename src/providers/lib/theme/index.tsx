import { NativeBaseProvider } from "native-base";
import { PropsWithChildren } from "react";
import CustomTheme from "./constants";

function ThemeProvider({ children }:PropsWithChildren) {
  return (
    <NativeBaseProvider theme={CustomTheme}>
      {children}
    </NativeBaseProvider>
  );
}

export default ThemeProvider;