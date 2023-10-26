import Footer from "../components/Footer/index";
import Header from "../components/Header/Header";


export default function MainLayout({ children }) {

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}