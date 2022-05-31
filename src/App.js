import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import Thriller from "./components/Thriller.js"
import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="thriller">
        <Thriller />
      </div>
    </div>
  )
}

export default App
