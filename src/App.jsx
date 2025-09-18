import Label from "./components/Label";
import Task from "./components/Task";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <>
        <div className="flex justify-around">
          <Label />
          <Task />
        </div>
      </>
    </Provider>
  );
}

export default App;
