import React from 'react';
import Navbar from './layout/Navbar';
import './styles.css';

class App extends React.Component {
  state = {
    loading: true,
    currentSlide: 'welcome',
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
    // var tl = ;
    const {tl} = this.state;
    if (!this.state.loading && prevState.loading) {
      tl.from('.navbar', 0.5, {left: '-80px'}, '+=0.5');
    } else {
      // switch (prevState.currentSlide) {
      //   case 'welcome':
      //       tl.to('.welcome', 0.5, {right: '-100vw'});
      //     break;
      //   default:
      //     break;
      // }
    }

    switch (this.state.currentSlide) {
      case 'welcome':
        tl.from('.welcome', 0.5, {right: '100vw'}, '+=0.5');
        tl.from('.image_side', 0.5, {bottom: '-100vh'}, '+=0.5');
        tl.from('.content_side', 0.5, {top: '-100vh'},  '+=0.5');
        break;
      default:
        break;
    }
  }

  currentSlide = slide => {
    if (this.state.currentSlide !== slide) {
      this.setState({currentSlide: slide})
    };



  }

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
