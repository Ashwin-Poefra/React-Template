import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import '@radix-ui/themes/styles.css';

// create react node
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// render react components
root.render(<App />);

// report web vitals
reportWebVitals();
