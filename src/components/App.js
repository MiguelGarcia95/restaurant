import React from 'react';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    // window.addEventListener('load', () => {
    //   document.getElementById('loading').classList.add('loaded');
    // })

    var tl = new window.TimelineMax();
    const controller = new window.ScrollMagic.Controller();

    tl.from('#test', .5, {opacity: 0, left: "-100%"});

    const scene = new window.ScrollMagic.Scene({
      triggerElement: "#test",
    })
    .setTween(tl)
    .addTo(controller);
  }

  render() {
    return (
      <div className="app">
        {/* <section id='loading'>loading</section> */}
        <section className='welcome'>

        </section>
        <section className='welcome'>

        </section>
        <section id='test'>
          <h1>This slides in!</h1>
        </section>
      </div>
    );
  }
}

export default App;
