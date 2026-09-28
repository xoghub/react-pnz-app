import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import TableCustome from './Table'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <header>Table Custome 3 Row</header>
    <TableCustome></TableCustome>
  </StrictMode>,
);