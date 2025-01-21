import styled from "styled-components";
import log from "eslint-plugin-react/lib/util/log.js";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  cursor: pointer;

  margin: 20px;
`;

function App() {
  return (
    <div>
      <H1>Rent Adventure App</H1>
      <Button onClick={() => console.log("Check in")}>Check in</Button>
      <Button onClick={() => console.log("Check out")}>Check out</Button>
    </div>
  );
}

export default App;
