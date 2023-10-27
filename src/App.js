import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarmain from './Components/Navbarmain';
import Footer from './Components/Footer';
import Film from './Components/Film';


function App() {
  return (
    <div className="App bg-black">
      <header>
        <Navbarmain />
      </header>
      <main>
        <h1 className="text-white mx-4 my-4">Harry Potter</h1>
        <Film propId={"harry+potter"} />
        <h1 className="text-white mx-4 my-4">Iron Man</h1>
        <Film propId={"iron+man"} />
        <h1 className="text-white mx-4 my-4">Spider Man</h1>
        <Film propId={"spider+man"} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
