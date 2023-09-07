
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import EmailIndex from "./pages/EmailIndex.jsx";
import EmailDetails from "./components/EmailDetails.jsx";
export function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/inbox" element={<EmailIndex/>}/>
                <Route path="/starred" element={<EmailIndex/>}/>
                <Route path="/sent" element={<EmailIndex/>}/>
                <Route path="/drafts" element={<EmailIndex/>}/>
                <Route path="/trash" element={<EmailIndex/>}/>
                <Route path="/inbox/:mailId" element={<EmailIndex />} />
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

