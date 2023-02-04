import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AuthProvider } from './auth/auth'
import { LoadingProvider } from './contexts/loading'
import { OnlineUserProvider } from './contexts/onlineusers'
import { MessageNotificationProvider } from './contexts/messageNotification'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <AuthProvider>
        <MessageNotificationProvider>
          <OnlineUserProvider>
            <App />
          </OnlineUserProvider>
        </MessageNotificationProvider>
      </AuthProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
