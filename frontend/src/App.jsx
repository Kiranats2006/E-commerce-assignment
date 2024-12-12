import LoginPage from "./components/auth/login";
import SignUpPage from "./components/auth/signup";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  );
}

export default App;
