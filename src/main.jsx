import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import './index.css'
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx'
import theme from './theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
        <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
            <App />
          </ThemeProvider>
          </BrowserRouter>
        </PersistGate>
    </Provider>
  </StrictMode>,
)
