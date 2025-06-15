import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error, Home, Dashboard } from "./pages";
import { DisplaySheet } from "./components/dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/components" element={<Dashboard />} />
        <Route path="/components" element={<Dashboard />}>
          <Route path=":componentName/:componentId" element={<DisplaySheet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
