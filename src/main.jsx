import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import BelajarES6 from './belajarES6.jsx'
import Siswa from "./siswa.jsx";


createRoot(document.getElementById('root'))
  .render(
    <StrictMode>
      {/* <BelajarES6 /> */}
      <Siswa/>
    </StrictMode>,
  );
