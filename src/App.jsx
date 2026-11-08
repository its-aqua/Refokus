import Navbar from "./components/Navbar"
import Stripes from "./components/Stripes"
import Work from "./components/Work"

const App = () => {
  return (
    <div className="h-screen w-full font-[satoshi] bg-zinc-800">
      <Navbar />
      <Work />
      <Stripes />
    </div>
  )
}

export default App