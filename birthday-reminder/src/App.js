import React, { useState } from "react";
import data from "./data";
import List from "./List";
import { Button } from "reactstrap";
function App() {
  const [people, setpeople] = useState(data);
  return (
    <main>
      <section
        className="container d-flex justify-content-center"
        style={{ marginTop: "150px" }}
      >
        <div
          className="card"
          style={{ width: "25rem", marginLeft: "3rem", marginRight: "3rem" }}
        >
          <div className="card-body">
            <h2 className="text-center">{people.length} Birthdays today</h2>
            <List people={people} />
            <Button
              type="button"
              color="primary"
              size="lg"
              block
              onClick={() => setpeople([])}
            >
              Clear All
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
