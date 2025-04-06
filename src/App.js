import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import PostList from "./pages/PostList/PostList";

const App = () => {
  // 임시로 로그인 상태를 확인하는 함수
  const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn() ? (
              <Navigate to="/postlist" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/postlist"
          element={
            isLoggedIn() ? <PostList /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
