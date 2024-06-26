import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en-US">
        <body>
          <section>
            <header></header>

            <main>{children}</main>

            <footer></footer>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
