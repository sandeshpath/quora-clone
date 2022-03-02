
import Notifications from './Components/Notifications';
import Answer from './Components/Answer';
import Following from './Components/Following';
import Spaces  from './Components/Spaces';
import Home from './Components/Home'
import Navbar from './Layout/Navbar';
import {Routes,Route} from 'react-router-dom'
import Settings from './Components/Settings';
import BookMarks from './Components/IndividualProfile/Bookmarks';
import ContentStats from './Components/IndividualProfile/ContentStats';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login'
import SignUp from './Components/SignUp';

const App=()=> {
 
  return (
    <div >
     
      <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/landingpage" element={<LandingPage/>}/> 
          <Route path="/login" element={<Login/>}/> 
          <Route path="/signup" element={<SignUp/>}/> 
          <Route path="/following" element= {<Following/>}/>  
          <Route path="/answer" element= {<Answer/>}/> 
          <Route path="/spaces" element= {<Spaces/>}/>  
          <Route path="/notifications" element= {<Notifications/>}/>
          <Route path="/settings" element= {<Settings/>}/>
          <Route path="/bookmarks" element={<BookMarks/>} />
          <Route path="/stats" element={<ContentStats/>} />
      </Routes>
      
     
      
    </div>
  );
}

export default App;
