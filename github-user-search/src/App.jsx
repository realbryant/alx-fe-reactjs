import { useState } from "react";
import { fetchGitHubUser } from "./services/githubService";


function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchGitHubUser(username);
      setUserData(data);
    } catch (err) {
      alert("User not found!");
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt="avatar" width={100} />
          <p>
            <a href={userData.html_url} target="_blank">Profile</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;

