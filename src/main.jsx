import { StrictMode } from 'react'
import HelloWorld from './helloworld.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root'))
  .render(
    <StrictMode>
      <HelloWorld/>
    </StrictMode>,
  );
