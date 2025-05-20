import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Account/Login/Login";
import SignUp from "./pages/Account/SignUp/SignUp";
import ChatList from "./pages/Chat/ChatList/ChatList";
import ChatRoom from "./pages/Chat/ChatRoom/ChatRoom";
import MyPage from "./pages/My/MyPage/MyPage";
import MyPosts from "./pages/My/MyPosts/MyPosts";
import ScrappedPosts from "./pages/My/ScrappedPosts/ScrappedPosts";
import PostList from "./pages/Post/PostList/PostList";
import PostCreate from "./pages/Post/PostCreate/PostCreate";
import PostDetail from "./pages/Post/PostDetail/PostDetail";
import PostModify from "./pages/Post/PostModify/PostModify";
import MobileLayout from "./components/common/MobileLayout/MobileLayout";
import Alarm from "./pages/Alarm/Alarm";

const App = () => {
  // 임시로 로그인 상태를 확인하는 함수
  const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };

  return (
    <BrowserRouter>
      <MobileLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/post/list" replace />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/list" element={<PostList />} />
          <Route path="/post/create" element={<PostCreate />} />
          <Route path="/post/detail/:id" element={<PostDetail />} />
          <Route path="/post/modify/:id" element={<PostModify />} />
          <Route path="/chat" element={<ChatList />} />
          <Route path="/chat/:chatId" element={<ChatRoom />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/my-page/my-posts" element={<MyPosts />} />
          <Route path="/my-page/scrapped" element={<ScrappedPosts />} />
          <Route path="/alarm" element={<Alarm />} />
        </Routes>
      </MobileLayout>
    </BrowserRouter>
  );
};

export default App;
