import './App.css';
import Header from './components/header/HeaderComponent';
import CardV2 from './components/cards/cardsV2';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import MainPage from './components/pages/MainPagex';
import About from "./components/pages/About";
import ProductPage from "./components/pages/book";
// import MangaFilters from "./components/catalogFilters/filter";
// import Catalog from "./components/catalogFilters/filter";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route index element={<MainPage/>}/>

                    <Route path={'/cardv2'}
                           element={<CardV2 key={1} name={'Человек-бензопила. Книга 2.'} author={'Кэнтаро Миура'}
                                            img_url={'.'}/>}/>
                    {/*<Route path={'/q'}*/}
                    {/*       element={<MangaFilters/>}/>*/}
                    <Route path={'/book'} element={<ProductPage/>}/>
                    <Route path={'/about'} element={<About/>}/>
                </Routes>
            </Router>
            <Footer/>
        </div>
);
}

export default App;
