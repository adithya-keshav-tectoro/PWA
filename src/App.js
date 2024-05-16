import React from "react";
import "./App.css";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import Navig from "./Navig";

function App() {
  let [pq, setpq] = React.useState(true);
  let [nav, setNav] = React.useState(false);
  const [values, setValues] = React.useState({
    email: "emmtesing.tectoro@gmail.com",
    password: "Testing@123",
  });
  const handle = (e) => {
    e.preventDefault();
    const Name = e.target.getAttribute("name");
    const Value = e.target.value;
    const newData = { ...values };
    newData[Name] = Value;
    setValues(newData);
  };

  const onButtonClick = () => {
    if (
      values?.email === "emmtesing.tectoro@gmail.com" &&
      values?.password === "Testing@123"
    ) {
      setpq(false);
      setNav(true);
    }
  };

  return (
    <>
      {pq && (
        <div className="App">
          <Card>
            <CardBody>
              <CardTitle className="text-center" tag="h3">
                Login
              </CardTitle>
              <hr
                style={{
                  color: "#000000",
                  height: 5,
                }}
              />
              <CardText>
                <Form>
                  <FormGroup floating>
                    <Input
                      id="a"
                      name="email"
                      placeholder=" "
                      type="email"
                      value={values.email}
                      onChange={handle}
                    />
                    <Label for="a">Email</Label>
                  </FormGroup>
                  <FormGroup floating>
                    <Input
                      id="b"
                      name="password"
                      placeholder=" "
                      type="password"
                      value={values.password}
                      onChange={handle}
                    />
                    <Label for="b">Password</Label>
                  </FormGroup>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Button
                      onClick={onButtonClick}
                      disabled={
                        !(
                          values?.email === "emmtesing.tectoro@gmail.com" &&
                          values?.password === "Testing@123"
                        )
                      }
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </CardText>
            </CardBody>
          </Card>
        </div>
      )}
      {nav && <Navig Name={values.email} />}
    </>
  );
}

export default App;
