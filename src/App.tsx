import { Header } from './components/Header'
import { TodoInput } from './components/TodoInput';

import styles from './App.module.css';
import logoImage from '../assets/rocket.svg';
import logoText from '../assets/todo.svg';
import { TaskList } from './components/TaskList';
import { Provider } from "react-redux"
import { store } from './store';

function App() {
  return (
    <>
      <Header 
        logoImage={logoImage} 
        logoAlt='rocket'
        logoTextImage={logoText}
        logoTextAlt='app name todo'
      />
      <Provider store={store}>
        <div className={styles.wrapper}>
          <TodoInput />
          <TaskList />
        </div>
      </Provider>
    </>
  )
}

export default App
