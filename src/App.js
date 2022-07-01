import Layout from './Layout';
import Register from './Register';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Layout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
