import './App.scss';
import Navbar from './comps/Navbar';
import VerticalChanging from './comps/VerticalChanging';
import AnimationPage from './comps/AnimationPage';
import 'particles.js/particles';
import {Component} from 'react'

const { particlesJS } = window;

class App extends Component {
  componentDidMount() {
    particlesJS.load('particles-js', '/particles.json', () => {
      console.log('particles.json loaded');
    });
  }

  render() {
    return (
      <div className="app" id="particles">
        <div className="particles-js" id='particles-js'/>
        <Navbar />
        <p className="header">Move your mouse</p>
        <VerticalChanging />
        <AnimationPage />
      </div>
    )
  }
}
export default App;
