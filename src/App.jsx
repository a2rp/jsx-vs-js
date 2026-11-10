import JsxVsJs from "./jsxVsJs"
import ScrollToTop from "./ScrollToTop"
import SiteFooter from "./SiteFooter"
import SiteHeader from "./SiteHeader"

const App = () => {
    return (
        <div id="top">
            <SiteHeader />
            <main id="comparison"><JsxVsJs /></main>
            <div id="notes"><SiteFooter /></div>
            <ScrollToTop />
        </div>
    )
}

export default App
