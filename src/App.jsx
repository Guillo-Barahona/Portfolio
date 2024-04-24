import './App.css'
import NavBar from './components/NavBar'
import ProfileBanner from './components/ProfileBanner'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WelcomeBanner from './components/WelcomeBanner'
import useIntersectionObserver from './components/useIntersectionObserver'

function App() {


  document.addEventListener("DOMContentLoaded", useIntersectionObserver(".hidden1"));
  document.addEventListener("DOMContentLoaded", useIntersectionObserver(".hidden2"));
  document.addEventListener("DOMContentLoaded", useIntersectionObserver(".hidden3"));


  return (
      <div>
      <NavBar></NavBar>
      <WelcomeBanner></WelcomeBanner>

      <ProfileBanner></ProfileBanner>
      <Skills></Skills>
      <Projects ></Projects>
      </div>

  )
}

export default App
