
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import EmailIndex from "./pages/EmailIndex.jsx";
import predefined_mails from "./assets/data/mails.json"
export function App() {

    if (!localStorage.getItem("mails")) {
        localStorage.setItem("mails", JSON.stringify(predefined_mails))
    }
    function PageNotFound() {
        return (
            <div>
                <h2>404 Page not found</h2>
            </div>
        );
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/inbox/:mailId?" element={<EmailIndex/>}/>
                <Route path="/starred/:mailId?" element={<EmailIndex/>}/>
                <Route path="/sent/:mailId?" element={<EmailIndex/>}/>
                <Route path="/drafts/:mailId?" element={<EmailIndex/>}/>
                <Route path="/trash/:mailId?" element={<EmailIndex/>}/>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>


        // <section className='main-app'>
        //     <header className="app-header">
        //         <section className="container">
        //             <h1>Log111</h1>
        //         </section>
        //     </header>
        //
        //     <main className='container'>
        //         <Home />
        //     </main>
        //
        //     <footer>
        //         <section className="container">
        //             robotRights 2023 &copy;
        //         </section>
        //     </footer>
        // </section>


    )
}

