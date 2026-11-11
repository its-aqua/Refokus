import Cards from "./components/Cards"
import Marqees from "./components/Marqees"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Stripes from "./components/Stripes"
import Work from "./components/Work"

const App = () => {
  return (
    <div className="w-full font-[satoshi] bg-zinc-800 text-white">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marqees />
      <Cards />
    </div>
  )
}

export default App