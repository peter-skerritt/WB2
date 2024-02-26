import "../styles/App.css";
import Profile from "./Profile";
import Title from "./Title";
import Navbar from "./Navbar";
import Links from "./Links";
import TextBox from "./TextBox";

function App() {
  return (
<div class="App">
  <div class="green"></div>
  <div class="white"></div>
  <div class="profile">
    <Profile/>
  </div>

  <div class="title">
  <Title/>
  </div>

  <div class="links">
  <Links/>
  </div>
  
  <div class="text">
    <TextBox/>
  </div>
   <Navbar/>
</div>
  );
}

export default App;
