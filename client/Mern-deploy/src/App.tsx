import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [serverMessage, setServerMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const fetchServerMessage = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/message");
      const data = await response.json();
      setServerMessage(data.message);
    } catch (error) {
      console.error("Error fetching from server:", error);
      setServerMessage("Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div className="card">
        <button onClick={fetchServerMessage} disabled={loading}>
          {loading ? "Loading..." : "Connect to Server"}
        </button>
        {serverMessage && (
          <p style={{ marginTop: "1rem", color: "#61dafb" }}>
            Server says: {serverMessage}
          </p>
        )}
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
