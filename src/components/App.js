import React from 'react';
import Navbar from './layout/Navbar';
import './styles.css';

class App extends React.Component {
  state = {
    loading: false,
  }

  componentDidMount() {
    // window.addEventListener('load', () => {
    //   setTimeout(() => {
    //     document.getElementById('loading').classList.add('loaded');
    //   }, 1000)
    // })

    var tl = new window.TimelineMax();
    const controller = new window.ScrollMagic.Controller();

    tl.from('#test', .5, {opacity: 0, right: "-100%"});

    const scene = new window.ScrollMagic.Scene({
      triggerElement: "#test",
    })
    .setTween(tl)
    .addTo(controller);
  }

  render() {
    return (
      <div className="app">
        {/* 
        <section id='loading'>
          <img src='img/spinner.svg' alt='loading logo' />
        </section> 
        */}

        <Navbar />

        <section className='page_section welcome'>
          <p>Take a bite.</p>
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
