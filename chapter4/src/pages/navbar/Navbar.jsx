import { Outlet } from "react-router-dom";
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="container">
            <nav>
                <div className={styles.navBar}>
                    <NavLink to="/articles" >浏览文章</NavLink>
                    <NavLink to="/articles/new" >新建文章</NavLink>
                </div>            
            </nav>
            <Outlet />
        </div>
    );
}