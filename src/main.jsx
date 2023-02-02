import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AuthProvider } from './auth/auth'
import { LoadingProvider } from './contexts/loading'
import { OnlineUserProvider } from './contexts/onlineusers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <AuthProvider>
        <OnlineUserProvider>
          <App />
        </OnlineUserProvider>
      </AuthProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
