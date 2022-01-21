import './App.css';
import {  Route } from 'react-router-dom'
import Header from './components/Home/Header';
import Home from './components/Home/Home';


function App() {
  return (
   <>
      <Header />
      <br />
       <div>
         <Route path='/' >
             <Home />
         </Route>
       </div>
   </>
  );
}

export default App;
