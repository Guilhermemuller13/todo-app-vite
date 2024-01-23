import { Suspense } from "react";
import { Provider } from "react-redux";

import { store } from "../redux/store";
import ViewThemeProvider from "./styles/ViewThemeProvider";

import Home from "../app/pages/Home";

// app como incialização da store e estilo da aplicação
const App = () => {
  return (
    <Provider store={store}>
      <ViewThemeProvider>
        <Suspense fallback={<div>...loading</div>}>
          <Home />
        </Suspense>
      </ViewThemeProvider>
    </Provider>
  );
};

export default App;
