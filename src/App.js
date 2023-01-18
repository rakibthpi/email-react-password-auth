import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Forms from "./components/Forms/Forms";
import app from "./firebase.init";

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider();

function App() {
  const handleGoogleCart = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user)

      })
      .catch(error => {
        console.error(error);
      })
  }
  const handleGithubCart = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error(error);
      })
  }



  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Bangladesh</h1>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={handleGoogleCart}>Google Signin</button>
        <button onClick={handleGithubCart}>github Signin</button>
      </div>
      <Forms></Forms>
      {/* <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onBlur={handleName} name="name" id="name" placeholder="Name" />
          <input onBlur={handlePassword} type="password" name="password" id="password" placeholder="Password" />
          <input type="submit" value="Login" />
        </form>
      </div> */}
    </div >
  );
}

export default App;
