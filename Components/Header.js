import React from 'react'
import Link from 'next/link'

function Header(props) {
    return (
        <div className="flex items-center space-x-2 md:space-x-10">
            <header>
                <div className="flex items-center space-x-2 md:space-x-10">
                    <ul className="hidden space-x-4 sm:flex">
                        <Link href="https://www.stclaircollege.ca/">
                            <li className="headerLink">Home</li>
                        </Link>
                        <li className="headerLink">Colleges</li>
                        <li className="headerLink">Popular</li>
                        <li className="headerLink">Info</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header
