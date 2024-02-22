import "../styles/App.css";
import Profile from "./Profile";

function App() {
  return (
<div class="App">
  <div class="green"></div>
  <div class="white"></div>
  <div class="profile">
    <Profile/>
  </div>
  <div class="title">
    <h1>Peter Skerritt</h1>
  </div>
  <div class="links">
    <p>Github</p>
    <p>LinkedIn</p>
    <p>Twitter</p>
  </div>
  <div class="text">
    <div class="text-box1">
      <div class="buttons">
        <button>Yes</button>
        <button>No</button>
      </div>
      <div class="title-text">
        <h3>Peter Skerritt</h3>
        <h2>Software Developer</h2>
      </div>
      <div class="main-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </div>
  <div class="navbar">
    <p>Navbar</p>
  </div>
</div>
  );
}

export default App;
