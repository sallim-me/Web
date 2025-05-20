import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import logoutIcon from "../../../assets/logout.svg";
import alarmOffIcon from "../../../assets/alarm-off.svg";
import alarmOnIcon from "../../../assets/alarm-on.svg";

const Header = () => {
  const navigate = useNavigate();
  const [hasAlarm, setHasAlarm] = useState(false); // 실제로는 API나 상태 관리를 통해 알람 상태를 관리해야 함

  const handleLogout = () => {
    // TODO: 로그아웃 로직 구현
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <S.HeaderContainer>
      <S.ButtonGroup>
        <S.IconButton onClick={handleLogout}>
          <img src={logoutIcon} alt="로그아웃" />
        </S.IconButton>
        <S.IconButton $hasAlarm={hasAlarm} onClick={() => navigate("/alarm")}>
          <img src={hasAlarm ? alarmOnIcon : alarmOffIcon} alt="알림" />
          {hasAlarm && <S.AlarmDot />}
        </S.IconButton>
      </S.ButtonGroup>
    </S.HeaderContainer>
  );
};

export default Header;
