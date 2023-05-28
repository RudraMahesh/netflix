import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import { Login } from './pages/Login';
import User from './User-page';
import Private from './Private';
import Main from './pages/Main';
import { AuthContextProvider } from './Context/auth';
import { SignUp } from './pages/SignUp';
import { NotFound } from './pages/NotFound';
import { List } from './pages/My-list';
import { Search } from './pages/Search';
import { VideoSection } from './pages/VideoSection';
import { Account } from './pages/Account';

function App() { 
  return (
    <>
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route element={<Private />}>
              <Route path="/user" element={<User />} />
              <Route path="/search" element={<Search />} />
              <Route path="/video" element={<VideoSection />} />
              <Route path="/main/" element={<Main />} />
              <Route path="/list" element={<List />} />
              <Route path="/account" element={<Account />} />
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
