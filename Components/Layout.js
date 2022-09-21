import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
    return (
        <div className=" bg-gradient-to-b from-gray-900/10 to-[#010511]">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}