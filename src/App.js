import { Routes, Route, BrowserRouter } from "react-router-dom"

import Todo from "./components/todo/Todo";
import Mylist from "./components/myList/Mylist";


function App() {
  return (
    <>
   <BrowserRouter>
       <Routes>
           <Route path="/" element={<Todo/>} />
           <Route path="mylist" element={<Mylist />} />
       </Routes>
     </BrowserRouter>
    </>
  
  );
}

export default App;
