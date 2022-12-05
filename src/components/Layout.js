import NavBar from "./NavBar";

export const Layout = ({ children }) => {
    return (
        <main className='flex flex-col h-screen m-5'>   
            <NavBar/>
            <section className="pt-10">{children}</section>
        </main>
    );
};