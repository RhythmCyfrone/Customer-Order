import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {store} from './State/store.ts'
import { Provider } from 'react-redux'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <App />
    </Provider>
)
