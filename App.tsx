import React from "react";
import myStore from "./src/config/store";
import AppContainer from "./src/routes";
import { Provider } from "react-redux";
// console.disableYellowBox = true;
const App = () => {
  return (
    <Provider store={myStore}>
      <AppContainer />
    </Provider>
  );
};

export default App;
