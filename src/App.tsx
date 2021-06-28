import { Routes } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "./Provider";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Provider>
      <Routes />
      <ToastContainer />
    </Provider>
  );
};

export default App;
