import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from "./firebase.init";

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

function App() {
  const handleGoogleCart = () => {
    console.log("Rakib Hosen google");
  }
  const handleGithubCart = () => {
    console.log("rakib github");
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Bangladesh</h1>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={handleGoogleCart}>Google Signin</button>
        <button onClick={handleGithubCart}>github Signin</button>
      </div>
    </div >
  );
}

export default App;
