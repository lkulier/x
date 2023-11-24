import React from 'react';
import ReactDOM from 'react-dom/client';
import { Buffer as ImportedBuffer } from 'buffer';
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay(),
  ],
  enabled: process.env.NODE_ENV === 'production',
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

if (typeof window !== 'undefined') window.Buffer = window.Buffer ?? ImportedBuffer;

// components
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
