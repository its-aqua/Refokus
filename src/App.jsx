import Navbar from "./components/Navbar"
import Work from "./components/Work"

const App = () => {
  return (
    <div className="h-screen w-full font-[satoshi] bg-zinc-800">
      <Navbar />
      <Work />
    </div>
  )
}

export default App