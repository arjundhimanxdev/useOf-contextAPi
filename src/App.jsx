import { NameAction, ShowName } from "./components"
import ColorProvider from "./context/ColorContext.jsx"

const App = () => {
  return (
    <>
    <header className="flex justify-center bg-gray-400 h-[8rem] items-center">
     <h1 className="text-3xl font-bold font-mono "> Hello, How are you dear....</h1>
    </header>

    <main>
    <ColorProvider>
    <div className="flex flex-col bg-gray-300 justify-center items-center gap-6 ">
    <ShowName/>
    <NameAction/>
    </div>
    </ColorProvider>
    </main>

    <footer>
      
    </footer>
    
    </>
  )
}

export default App
