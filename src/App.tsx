import type { Component } from 'solid-js';

import OrbiqDark from "./assets/orbiq_dark.svg"
import styles from './App.module.css';
import ComingSoonComponent from './components/comingsoon';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <div
        class={styles.bg}
        style={{
          background: `
            radial-gradient(circle at 50% 50%,
              rgba(226, 232, 240, 0.2) 0%,
              rgba(226, 232, 240, 0.1) 25%,
              rgba(226, 232, 240, 0.05) 35%,
              transparent 50%
            )
          `,
        }}
      />
      <img src={OrbiqDark} alt="Orbiq" />
      <h1 class="m-plus-code-latin-400" style="font-size: 4em;">Orbiq</h1>
    </div>
  );
};


export default App;
