import "../styles/App.css";
import Profile from "./Profile";
import Buttons from "./Buttons";
import Title from "./Title";

function App() {
  return (
<div class="App">
  <div class="green"></div>
  <div class="white"></div>
  <div class="profile">
    <Profile/>
  </div>
 <Title/>
  <div class="links">
    <p>Github</p>
    <p>LinkedIn</p>
    <p>Twitter</p>
  </div>
  <div class="text">
  <div class="text-box1">
        <Buttons/>
          <div class="title-text">
            <h3>Peter Skerritt</h3>
            <h2>Software Developer</h2>
          </div>
          <div class="main-text">
            <p>I am a young, thirsty for knowledge and fiendishly keen Software Developer, with a strong love of all things tech. I code in my spare time,
               making many (often unfinished and wonky) projects - on everything from F1 team-name generators, to study timers and cruise-ship itineraries. With a background
               in a wide variety of industries, I can bring a sprawling and surprising skillset to any Development Team. 
            </p>
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
