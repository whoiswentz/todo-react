import { Header } from './components/Header'
import { TodoInput } from './components/TodoInput';

import styles from './App.module.css';
import logoImage from '../assets/rocket.svg';
import logoText from '../assets/todo.svg';

function App() {
  return (
    <>
      <Header 
        logoImage={logoImage} 
        logoAlt='rocket'
        logoTextImage={logoText}
        logoTextAlt='app name todo'
      />
      <div className={styles.wrapper}>
        <TodoInput />
      </div>
    </>
  )
}

export default App
