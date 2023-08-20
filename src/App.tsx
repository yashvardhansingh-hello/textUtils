import './App.css';
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm"

function App() {
  return (
    <>    
    <Navbar title="TextUtils" aboutText= "About" />
    <div className="container my-4">
    <TextForm heading="Essay"/>
    </div>
    </>
  );
}


export default App;
