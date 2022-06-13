import React from 'react'
import { TodosProvider } from './Contexts/TodosContext';
import TodoApp from './TodoApp';

function App() {
  return (
    <div style={{height:'100vh'}}>
      <TodosProvider>
        <TodoApp />
      </TodosProvider>
    </div>
  );
}

export default App;