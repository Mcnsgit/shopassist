import { Link } from 'react-router-dom';

interface LayoutProps {
children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
return (
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">My Shop</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
            </li>
        </ul>
        </div>
        </nav>
    {children}
    </div>
);
}

export default Layout;
