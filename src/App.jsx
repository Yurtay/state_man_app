import React, { useState } from "react";
import Button from "./components/button/button.jsx";
import ReduxMainPage from "./redux/reduxMainPage.jsx";
import ReduxToolkitMainPage from "./reduxToolkit/reduxToolkitMainPage.jsx";
import Another from "./another/another.jsx";

function App() {
  const [isActive, setIsActive] = useState("");
  return (
    <>
      <h1>State management</h1>
      <Button
        title="Redux"
        isActive={isActive === "redux"}
        onClick={() => setIsActive("redux")}
      />
      <Button
        title="Redux toolkit"
        isActive={isActive === "redux-toolkit"}
        onClick={() => setIsActive("redux-toolkit")}
      />

      <Button
        title="Another"
        isActive={isActive === "another"}
        onClick={() => setIsActive("another")}
      />
      {isActive === "redux" && <ReduxMainPage />}
      {isActive === "redux-toolkit" && <ReduxToolkitMainPage />}
      {isActive === "another" && <Another />}
    </>
  );
}

export default App;
