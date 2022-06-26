import "./App.css";
import { signIn, signOut, useSession } from "next-auth/react";

function App() {
  const session = useSession();

  console.log(session);

  return (
    <div className="App">
      <button onClick={() => signIn()}>Log In</button>
      <button onClick={() => signOut()}>Log Out</button>

      <div>
        <p>
          User is{" "}
          {session.status === "authenticated"
            ? "logged in"
            : "not authenticated"}
        </p>
      </div>
    </div>
  );
}

export default App;
