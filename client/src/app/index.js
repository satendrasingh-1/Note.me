import { ToastContainer, toast } from 'react-toastify';

import Notes from "../notes";
import Login from "../pages/login";
import Loader from "../shared/loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../layout/main"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loader" element={<Loader/>}/>

        <Route path="/notes" element={<Main/>}>
          <Route index element={<Notes/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
