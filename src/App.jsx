import { BrowserRouter, Route, Routes } from "react-router-dom";
import EntryView from "./views/EntryView";
import SignUp from "./views/SignUp";
import MoodRegistration from "./views/MoodRegistration";
import Trends from "./views/Trends";
import { AuthProvider } from './context/AuthContext';
import {ProtectedRouted} from './Components/ProtectedRouted'

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntryView />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/register-mood" element={ <ProtectedRouted>
          <MoodRegistration />
        </ProtectedRouted >}>
          </Route>
        <Route path="/trends" element={<ProtectedRouted>
          <Trends />
          </ProtectedRouted>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
