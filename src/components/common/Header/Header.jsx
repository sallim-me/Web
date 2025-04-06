import React from "react";
import * as S from "./styled";
import logoutButton from "../../../assets/logout-button.svg";
import alarmOn from "../../../assets/alarm-on.svg";
import alarmOff from "../../../assets/alarm-off.svg";

const Header = ({ hasAlarm = false, onLogout, onAlarmClick }) => {
  return (
    <S.HeaderContainer>
      <S.LeftSection>
        <S.LogoutButton onClick={onLogout}>
          <img src={logoutButton} alt="로그아웃" />
        </S.LogoutButton>
        <S.AlarmButton hasAlarm={hasAlarm} onClick={onAlarmClick}>
          <img src={hasAlarm ? alarmOn : alarmOff} alt="알람" />
        </S.AlarmButton>
      </S.LeftSection>
    </S.HeaderContainer>
  );
};

export default Header;
