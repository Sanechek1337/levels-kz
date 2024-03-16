import { RouterProvider } from 'react-router-dom';
import { router } from './routes.tsx';
import './App.css';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
