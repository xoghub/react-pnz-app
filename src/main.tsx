import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Container } from './app/HelloWorld/Container'
import HelloWorld from './app/HelloWorld/HelloWorld';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Container>
      {/* HelloWorld Become Children to Container */}
      <HelloWorld/>
    </Container>
  </StrictMode>
)
