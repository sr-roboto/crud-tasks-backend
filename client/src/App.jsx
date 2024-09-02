import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Tasks from './views/Tasks';
import TaskForm from './views/TaskForm';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import { ProtectedRoute } from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/add-task" element={<TaskForm />} />
              <Route path="/tasks/:id" element={<TaskForm />} />
              <Route path="/profile" element={<h1>Profile</h1>} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
