import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Tasks from './views/Tasks';
import TaskForm from './views/TaskForm';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/new" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
