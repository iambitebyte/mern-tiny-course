import { Outlet } from "react-router-dom";
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="container">
            <nav>
                <div className={styles.navBar}>
                    <NavLink to="/articles" className={({ isActive }) => isActive ? styles.activeLink : undefined}>浏览文章</NavLink>
                    <NavLink to="/new" className={({ isActive }) => isActive ? styles.activeLink : undefined}>新建文章</NavLink>
                </div>            
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}