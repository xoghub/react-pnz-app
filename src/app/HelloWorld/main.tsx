import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import HelloWorld from './HelloWorld.tsx'
import TodoList from '../TodoList/TodoList';
import AlertButton from '../AlertButton/AlertButton';
import MyButton from '../AlertButton/MyButton';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelloWorld />
    <TodoList/>
    <AlertButton/>
    <MyButton text={'on Smash'} onSmash={()=> alert('message on smash')}/>
  </StrictMode>
)