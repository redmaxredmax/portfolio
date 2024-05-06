import React from 'react'
import { Header } from './header'
import { Footer } from './footer/footer'
import App from '../../App'
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
    return (
        <div className='flex flex-col justify-between h-screen'>
            <div>
                <header>
                    <Header />
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
