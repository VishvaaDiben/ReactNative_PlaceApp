import MainApp from "./mainApp";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <MainApp />
    </ReduxProvider>
  );
}
