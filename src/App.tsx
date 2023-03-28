import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["Tehran", "New York", "Waterloo", "Montreal"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={(item) => handleSelectItem(item)}
        />
      </div>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
        )}
      </div>
      <div>
        <Button
          onClick={() => {
            setAlertVisibility(alertVisible ? false : true);
          }}
          color="primary"
        >
          My Button
        </Button>
      </div>
    </>
  );
}

export default App;
