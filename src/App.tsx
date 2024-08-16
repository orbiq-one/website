import type { Component } from 'solid-js';

import OrbiqDark from "./assets/orbiq_dark.svg"
import styles from './App.module.css';
import ComingSoonComponent from './components/comingsoon';
const App: Component = () => {
  return (
    <div class={styles.App}>
      <img src={OrbiqDark}/>
      <h1 class="m-plus-code-latin-400" style="font-size: 4em;">Orbiq</h1>
      <ComingSoonComponent />
    </div>
  );
};

export default App;
