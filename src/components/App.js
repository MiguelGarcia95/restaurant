import React from 'react';
import Navbar from './layout/Navbar';
import './styles.css';

class App extends React.Component {
  state = {
    loading: true,
    currentSlide: 'welcome',
    increment: 0.5,
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
        case 'about':
          // tl.to('.about', 0.5, {right: '100vw'});
          tl.to('.about', 0.5, {right: '100vw'}, '+=1');
          break;
        case 'menu':
          tl.to('.menu', 0.5, {right: '100vw'});
          break;
        case 'contact':
          tl.to('.contact', 0.5, {right: '100vw'});
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
      case 'about':
        tl.to('.about', 0.5, {right: '0vw'}, `+=${increment}`);
        break;
      case 'menu':
        tl.to('.menu', 0.5, {right: '0vw'}, `+=${increment}`);
        break;
      case 'contact':
        tl.to('.contact', 0.5, {right: '0vw'}, `+=${increment}`);
        break;
      default:
        break;
    }
  }

  // removeSlide = (slide, tl) => {}

  setCurrentSlide = slide => {
    if (this.state.currentSlide !== slide) {
      this.setState({currentSlide: slide})
    };
  }

  render() {
    const {currentSlide} = this.state;
    
    return (
      <div className="app">
        
        <section id='loading'>
          <img src='img/spinner.svg' alt='loading logo' />
        </section> 
       

        <Navbar setCurrentSlide={this.setCurrentSlide} currentSlide={currentSlide} />

        <section className='page_section welcome'>
          <section className='content_side'>
            <h1>Hungry?</h1>
            <h1>Get a bite</h1>
            <section className='content-button'>
              <p>Check our Menu Out</p>
            </section>
          </section>
          <section className='image_side'>
          </section>
        </section>

        <section className='page_section about'>
          <h1>about</h1>
        </section>

        <section className='page_section menu'>
          <h1>menu</h1>
        </section>

        <section className='page_section contact'>
          <h1>contact</h1>
        </section>

        {/* <section className='page_section' id='test'>
          <h1>This slides in!</h1>
        </section> */}
      </div>
    );
  }
}

export default App;
