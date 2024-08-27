import logo from './logo.svg';
import './App.css';
import SampleButton from './Components/SampleButton';
import HooksBtn from './Components/HooksBtn';
import StopWatch from './Components/StopWatch';
import RouterPages from './Components/Pages/RouterPages';
import ShoppingCard from './Components/Pages/ShoppingCard';
import UserApps from './Components/Pages/UserApps';

function App() {
  return (
    <div>
      {/* <SampleButton userName={"All"} clr={"red"}/>      
      <SampleButton userName={"Songs"} clr={"Yellow"}/>      
      <SampleButton userName={"Movies"} clr={"orange"}/>      
      <SampleButton userName={"Sports"} clr={"blue"}/>      
      <SampleButton userName={"News"} clr={"Green"}/>
      <HooksBtn/>
      <RouterPages/>
      <ShoppingCard/> */}
      {/* <StopWatch/>  */}
      <UserApps/>
    </div>
  );
}

export default App;
