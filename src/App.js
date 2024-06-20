import {Routes,Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blogs from "./pages/Blogs";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";
import Error from "./pages/Error";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Getstarted from "./pages/Getstarted";
import Learnmore from "./pages/Learnmore";
import Review from "./pages/Review";
import Profile from "./pages/Profile";


function App() {
  return (
    <div className="">
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="*" element={<Error/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/getstarted" element={<Getstarted/>}/>
      <Route path="/learnmore" element={<Learnmore/>}/>
      <Route path="/review" element={<Review/>}/>
      <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>

  );
}

export default App;
