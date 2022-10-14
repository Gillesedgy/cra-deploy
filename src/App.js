import "./App.css";
import Contacts from "./Components/Contacts";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
      <h1>Pursuit App Template</h1>
      <p>Added P tag</p>
      <Contacts />
    </div>
  );
}

export default App;
