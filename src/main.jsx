import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <CssBaseline enableColorScheme />
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
          </BrowserRouter>
        </PersistGate>
    </Provider>
  </StrictMode>,
)
