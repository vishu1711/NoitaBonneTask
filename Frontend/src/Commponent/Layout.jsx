import React from 'react'
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ minHeight: '90.8vh' }}>
                {children}
            </main>
        </>
    )
}

export default Layout;
