import { render } from "react-dom";
import App from "./pages/App";
import { UserProvider } from "./context/context";

render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.querySelector(".root")
);
