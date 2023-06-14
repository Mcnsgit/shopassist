// app.js
import { Link, Outlet, useLocation } from 'react-router-dom';
import './App.css';

function App() {
const location = useLocation();

return (
    <div className="App">
    <header>
        <nav>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/products">Products</Link>
            </li>
            <li>
            <Link to="/cart">Cart</Link>
            </li>
        </ul>
        </nav>
    </header>
    <main>
        <Outlet />
    </main>
    </div>
);
}

export default App;
