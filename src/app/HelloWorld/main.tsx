import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import HelloWorld from './HelloWorld.tsx'
import TodoList from '../TodoList/TodoList';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelloWorld />
    <TodoList/>
  </StrictMode>
)