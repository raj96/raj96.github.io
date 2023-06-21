import './App.css'

function App() {
  return (
    <>
      <div className="selection-screen">
        <div className="selection-card bg-yellow-600">
          <div className="selection-text opacity-90">Personal</div>
        </div>
        <div className="selection-card bg-blue-400 flex flex-col-reverse">
          <div className="selection-text opacity-60 text-right">Professional</div>
        </div>
      </div>
    </>
  )
}

export default App
