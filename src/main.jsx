import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/Main/component";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <div>
    <MainPage />
  </div>
);