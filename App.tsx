import Button from "./components/button";
import Alert from "./components/Alert";
import { useState } from "react";
function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show && <Alert onClose={() => setShow(false)}>Alert</Alert>}
      <Button onclick={() => setShow(true)} color="secondary">
        Click me
      </Button>
    </div>
  );
}

export default App;
