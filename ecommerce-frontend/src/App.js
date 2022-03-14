import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login.js';
import Register from './components/register/Register';
import Home from './components/home/Home';
import Header from './components/commons/Header';
import NotFound from './components/commons/NotFound';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Header />}>
                <Route index element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    )
        ;
}

export default App;
