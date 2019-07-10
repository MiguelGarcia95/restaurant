import React from 'react';
import Navbar from './layout/Navbar';
import Loading from './layout/Loading';
import Contact from './slides/Contact';
import Menu from './slides/Menu';
import Welcome from './slides/Welcome';
import './styles.css';

class App extends React.Component {
  state = {
    loading: true,
    currentSlide: 'welcome',
    increment: 0.25,
    firstLoad: true,
    tl: new window.TimelineMax()
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementById('loading').classList.add('loaded');
        this.setState({loading: false});
      }, 1000)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const {tl, increment} = this.state;
    if (!this.state.loading && prevState.loading) {
      tl.from('.navbar', 0.5, {left: '-80px'}, `+=${increment}`);
    } else {
      switch (prevState.currentSlide) {
        case 'welcome':
          tl.to('.image_side', 0.5, {bottom: '-100vh'},  `+=${increment}`);
          tl.to('.content_side', 0.5, {top: '-100vh'},  `-=${increment}`);
          tl.to('.welcome', 0.5, {right: '100vw'},  `+=${increment}`);
          break;
        case 'menu':
          tl.to('.menu_side', 0.5, {left: '-100vw'}, `+=${increment}`);
          tl.to('.menu_image_side', 0.7, {left: '-100vw'},  `+=${increment}`);
          tl.to('.menu', 0.5, {right: '100vw'}, `-=${increment}`);
          break;
        case 'contact':
          tl.to('.contact_form', 0.5, {scale: 0}, `+=${increment}`);
          tl.to('.contact', 0.5, {right: '100vw'}, `+=${increment}`);
          break;
        default:
          break;
      }
    }

    switch (this.state.currentSlide) {
      case 'welcome':
        tl.to('.welcome', 0.5, {right: '0vw'}, `+=${increment}`);
        tl.to('.image_side', 0.5, {bottom: '0vh'}, `+=${increment}`);
        tl.to('.content_side', 0.5, {top: '0vh'},  `-=${increment}`);
        break;
      case 'menu':
        tl.to('.menu', 0.5, {right: '0vw'}, `+=${increment}`);
        tl.to('.menu_image_side', 0.5, {left: 0},  `+=${increment}`);
        tl.to('.menu_side', 0.5, {left: 0}, `+=${increment}`);
        break;
      case 'contact':
        tl.to('.contact', 0.5, {right: '0vw'}, `+=${increment}`);
        tl.to('.contact_form', 0.5, {scale: 1}, `+=${increment}`);
        break;
      default:
        break;
    }
  }
 
  setCurrentSlide = slide => {
    if (this.state.currentSlide !== slide) {
      this.setState({currentSlide: slide})
    };
  }

  render() {
    const {currentSlide} = this.state;
    
    return (
      <div className="app">
        <Loading />
        <Navbar setCurrentSlide={this.setCurrentSlide} currentSlide={currentSlide} />

        <Welcome setCurrentSlide={this.setCurrentSlide} />
        <Menu />
        <Contact />
      </div>
    );
  }
}

export default App;
