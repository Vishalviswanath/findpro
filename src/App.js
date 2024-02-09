import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '', element: <Main /> }],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
