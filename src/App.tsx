import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import UserPage from './components/UserPage'
import './App.css'
import './index.css'
import Login from './components/Login'

const App = () => {
  return (
    <div className="grid grid-cols-[300px_1fr] grid-rows-[85px_1fr] min-h-screen">

      {/* Sidebar */}
      <aside className="row-span-2 h-screen">
        <Sidebar />
      </aside>

      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="p-4 bg-gray-100 h-79">
        <UserPage />
        <Login />
      </main>

    </div>
  )
}

export default App
