import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar} from './components/navbar';
import{Shop} from './pages/shop/shop';
import{Cart} from './pages/cart/cart';
import AuthProvider from 'react-auth-kit'
import {Signup} from './pages/signup/signup';
import { Login } from './pages/login/login';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (<div className="App">
    <ShopContextProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </ShopContextProvider>
  </div>);
}

export default App;
