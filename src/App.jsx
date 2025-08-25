import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { routes } from './routes';

function App() {
  // Dynamic title logic (should be safe)
  useEffect(() => {
    if (navigator.language.startsWith('ru')) {
      document.title = 'ТОТ';
    } else {
      document.title = 'TOT';
    }
  }, []);

  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          const element = React.createElement(route.component);
          return (
            <Route
              key={index}
              path={route.path}
              element={route.layout ? <Layout>{element}</Layout> : element}
            />
          );
        })}
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;