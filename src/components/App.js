import React from 'react';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    var tl = new window.TimelineMax();
    const controller = new window.ScrollMagic.Controller();

    tl.from('.welcome', .5, {opacity: 0});

    const scene = new window.ScrollMagic.Scene({
      triggerElement: ".welcome",
    })
    .setTween(tl)
    .addTo(controller);
  }

  render() {
    return (
      <div className="app">
        <section className='welcome'>

        </section>
      </div>
    );
  }
}

export default App;
