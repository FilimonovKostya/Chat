import React from 'react'
import SignIn from './components/SignIn'
import LogIn from './components/LogIn'
import { Route, Routes } from 'react-router-dom'
import ChatPage from './components/ChatPage'
import { useMessage } from './hooks/useMessage'

function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<SignIn />} />
        <Route path={'/login'} element={<LogIn />} />
        <Route path={'/chat'} element={<ChatPage />} />
      </Routes>
    </>
  )
}

export default App
