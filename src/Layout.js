import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const Layout = () => {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // 記得在清除時解除綁定
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleScroll = () => {
        const currentPosition = window.pageYOffset;

        if (currentPosition > 0) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };
    return (
        <div >
            <div className={'header ' + (isActive ? 'active' : '')} >
                <nav>
                    <ul>
                        <li>
                            <Link to="">
                                <p>React大旅店</p>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li><Link to="about">
                            <p>About Us</p>
                        </Link></li>
                    </ul>
                </nav>
            </div>

            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout

