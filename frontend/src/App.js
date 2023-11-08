import './App.css';
import { DataProvider } from './context/BookList';
import Book from './pages/Book';


function App() {
  return (
    <DataProvider>
    <div className="App">
    <h1>Book Management System</h1>
     <Book/>
    </div>
    </DataProvider>
  );
}

export default App;
