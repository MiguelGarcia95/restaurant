import React from 'react';
import Navbar from './layout/Navbar';
import './styles.css';

class App extends React.Component {
  state = {
    loading: true,
    currentSlide: 'welcome'
    // loading: false,
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementById('loading').classList.add('loaded');
        this.setState({loading: false});
      }, 1000)
    })
  }

  componentDidUpdate() {
    if (!this.state.loading) {
      var tl = new window.TimelineMax();
      const controller = new window.ScrollMagic.Controller();
  
      tl.from('.image_side', 0.5, {bottom: '-100vh'}, '+=0.5');
      tl.from('.content_side', 0.5, {top: '-100vh'},  '+=0.5');
      // tl.from('.navbar', 0.5, {left: '-80px'}, '-=1');
      tl.from('.navbar', 0.5, {scale: 0, left: '-80px'}, '-=1');
      const scene = new window.ScrollMagic.Scene({
        triggerElement: ".welcome",
        // triggerHook: "onLeave"
      })
      .setTween(tl)
      .addTo(controller);
    }
  }

  currentSlide = slide => this.setState({currentSlide: slide})

  render() {
    // const {loading} = this.state;
    
    return (
      <div className="app">
        
        <section id='loading'>
          <img src='img/spinner.svg' alt='loading logo' />
        </section> 
       

        <Navbar currentSlide={this.currentSlide} />

        <section className='page_section welcome'>
          <section className='content_side'>
            <h1>Hungry?</h1>
            <h1>Get a bite</h1>
            <button>Check our Menu Out</button>
          </section>
          <section className='image_side'>
            {/* <img src='img/background.jpg' /> */}
          </section>
        </section>

        <section className='page_section'>

        </section>

        <section className='page_section' id='test'>
          <h1>This slides in!</h1>
        </section>
      </div>
    );
  }
}

export default App;
