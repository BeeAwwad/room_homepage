import Header from "./comps/header";
import Body from "./comps/body";
import { useState } from "react";

function App() {
  const [isBackgroundGray, setIsBackgroundGray] = useState(false);

  const toggleBackground = () => {
    setIsBackgroundGray(!isBackgroundGray);
  };

  return (
    <>
      <Header toggleBackground={toggleBackground} />
      <Body isBackgroundGray={isBackgroundGray} />
    </>
  )
}

export default App
