import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaBeer } from 'react-icons/fa';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import { useState } from 'react';

function App() {
    const [auth, setAuth] = useState(false);
    return (
        <>
            <h3>
                Lets go for a <FaBeer color="#afa" />?{' '}
            </h3>

            <BrowserRouter>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            React-Bootstrap
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/" className="mr-3">
                                    Home
                                </Link>
                                <Link to="about" className="mr-3">
                                    About
                                </Link>
                                <Link to="product" className="mr-3">
                                    Product
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <h2>{auth ? '已登入' : '尚未登入'}</h2>
                <Routes>
                    <Route
                        path="/"
                        element={<Home auth={auth} setAuth={setAuth} />}
                    />
                    <Route path="about" element={<About />} />
                    <Route path="product" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
