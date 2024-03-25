import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { routes } from './routes.tsx';
import { Header } from './components/Header/Header.tsx';
import { Footer } from './components/Footer/Footer.tsx';
import './App.css';
import { getCompaniesList } from './store/slices/companiesListSlice.ts';
import { getSalariesList } from './store/slices/salariesSlice.ts';
import { AppDispatch } from './store/store.ts';

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompaniesList());
    dispatch(getSalariesList());
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
