// src/routes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PostList from './pages/PostList';
import PostForm from './pages/PostForm';
import AdminDashboard from './pages/AdminDashboard';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/posts" element={<PostList />} />
    <Route path="/posts/:slug" element={<PostDetail />} />
    <Route path="/admin/posts/edit/:id" element={<PostForm />} />
    <Route path="/admin/posts/new" element={<PostForm />} />
    <Route path="/dashboard" element={<AdminDashboard />} />
  </Routes>
);

export default AppRoutes;
