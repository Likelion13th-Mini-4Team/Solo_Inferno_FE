import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Start from './pages/Start';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Zero from './pages/Zero';
import Main from './pages/Main';
import Intro from './pages/Intro';
import Match from './pages/Match';
import Manage from './pages/Manage';
import Modify from './pages/Modify';
import Create from './pages/Create';
import Chat from './pages/Chat';
import My from './pages/My';


function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/zero" element={<Zero />} />
        <Route path="/main" element={<Main />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/match" element={<Match />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/modify" element={<Modify />} />
        <Route path="/create" element={<Create />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/my" element={<My />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
