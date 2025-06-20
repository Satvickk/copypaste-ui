import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error, Home, Loading } from "./pages";
import React, { Suspense } from "react";

const Dashboard = React.lazy(() => import("./pages/dashboard"));
const DisplaySheet = React.lazy(() =>
  import("./components/dashboard/display-sheet")
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/components" element={<Dashboard />}>
            <Route
              path=":componentName"
              element={<DisplaySheet />}
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
