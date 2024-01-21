import { Suspense } from "react";
import { Provider } from "react-redux";

import { store } from "../redux/store";
import ViewThemeProvider from "./styles/ViewThemeProvider";

const App = () => {
  return (
    <Provider store={store}>
      <ViewThemeProvider>
        <Suspense fallback={<div>...loading</div>}>Hello world</Suspense>
      </ViewThemeProvider>
    </Provider>
  );
};

export default App;
