import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Input />
      <Footer />
    </div>
  );
}

export default App;
