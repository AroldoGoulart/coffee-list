import { TanstackProvider } from "@/providers/lib/tanstack";
import { PropsWithChildren } from "react";
import ThemeProvider from "./lib/theme";

function Providers({ children }: PropsWithChildren) {
    return (
        <ThemeProvider>
            <TanstackProvider>
                {children}
            </TanstackProvider>
        </ThemeProvider>
    )
}

export default Providers;