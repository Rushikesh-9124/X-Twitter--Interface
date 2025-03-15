import './App.css';
import Mainsection from './components/MainSection/Mainsection';
import Sidebar from './components/Sidebar/Sidebar';
import Sidebarright from './components/sidebar-right/sidebarright';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Sidebar/>
      <Mainsection/>
      <Sidebarright/>
      </div>
    </div>
  );
}

export default App;
