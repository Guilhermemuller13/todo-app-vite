import { Suspense } from "react";

import ViewThemeProvider from "./styles/ViewThemeProvider";

const App = () => {
  return (
    <ViewThemeProvider>
      <Suspense fallback={<div>...loading</div>}>Hello world</Suspense>
    </ViewThemeProvider>
  );
};

export default App;
