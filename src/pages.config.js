import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import WhyPRG from './pages/WhyPRG';
import Resume from './pages/Resume';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "About": About,
    "Projects": Projects,
    "WhyPRG": WhyPRG,
    "Resume": Resume,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};