import React from 'react';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    var tl = new window.TimelineMax();
    const controller = new window.ScrollMagic.Controller();

    tl.from('#test', .5, {opacity: 0, left: "-100vw"});

    const scene = new window.ScrollMagic.Scene({
      triggerElement: "#test",
    })
    .setTween(tl)
    .addTo(controller);
  }

  render() {
    return (
      <div className="app">
        <section className='welcome'>

        </section>
        <section className='welcome'>

        </section>
        <section id='test'>

        </section>
      </div>
    );
  }
}

export default App;
