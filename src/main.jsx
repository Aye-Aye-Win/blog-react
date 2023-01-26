import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { blogApi } from './services/blogApi'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ApiProvider api={blogApi}>
      <App />
    </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
