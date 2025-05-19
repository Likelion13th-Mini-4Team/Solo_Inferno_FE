import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Start from './pages/Start';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Zero from './pages/Zero';
import Main from './pages/Main';
import IModify from './pages/IModify';
import Match from './pages/Match';
import Manage from './pages/Manage';
import TModify from './pages/TModify';
import Create from './pages/Create';
import Chat from './pages/Chat';
import My from './pages/My';
import Example from './pages/example';


function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="start" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/zero" element={<Zero />} />
        <Route path="/main" element={<Main />} />
        <Route path="/imodify" element={<IModify />} />
        <Route path="/match" element={<Match />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/tmodify" element={<TModify />} />
        <Route path="/create" element={<Create />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/my" element={<My />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
