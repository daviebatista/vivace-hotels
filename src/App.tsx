import AboutUs from "./components/AbousUs/AboutUs"
import Footer from "./components/Footer/Footer"
import Introduction from "./components/Introduction/Introduction"
import ReservationsContainer from "./components/ReservationsContainer/ReservationsContainer"
import RoomsContainer from "./components/RoomsContainer/RoomsContainer"

function App() {
  return (
    <>
      <Introduction/>
      <AboutUs/>
      <RoomsContainer/>
      <ReservationsContainer/>
      <Footer/>
    </>
  )
}

export default App
