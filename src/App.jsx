import Profuct from "./Product"
import Nav from "./nav"
function App() {
  return (
    <>
      <div className="grid grid-cols-4">
        <Nav/>
        <div className="col-span-3">
          <Profuct/>
        </div>
      </div>
    </>
  )
}

export default App
