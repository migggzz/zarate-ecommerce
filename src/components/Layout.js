import NavBar from "./NavBar";
import Footer from "./Footer"

export const Layout = ({ children }) => {
    return (
        <main className='flex flex-col h-screen m-5'>   
            <NavBar/>
            <section className="pt-10">{children}</section>
            <Footer/>
        </main>
    );
};