import Navbar from "./components/navigation/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />

      <main className="mt-24">
        <section className="max-w-7xl mx-auto flex flex-col items-center">
          <h1 className="text-cyan-900 font-bold text-6xl">Webbprogrammering <span className="font-normal">120hp</span></h1>
          <p className="text-xl text-cyan-900">PAGWG HT26</p>
        </section>
      </main>
    </div>
  )
}

export default App
