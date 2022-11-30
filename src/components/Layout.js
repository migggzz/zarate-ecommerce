import NavBar from "./NavBar";

export const Layout = ({ children }) => {
    return (
        <main className='flex flex-col h-screen m-5'>   
            <NavBar/>
            {children}
        </main>
    );
};