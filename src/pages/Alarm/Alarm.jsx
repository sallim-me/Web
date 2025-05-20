import React, { useState } from "react";
import { alarmList as initialAlarms } from "./alarmDummyData";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/back.svg";
import * as S from "./styled.js";

const getAlarmTitle = (type) => {
  switch (type) {
    case "chat":
      return "새로운 채팅이 도착했습니다.";
    case "comment":
      return "내 글에 새로운 댓글이 달렸습니다.";
    case "reply":
      return "내 댓글에 새로운 답글이 달렸습니다.";
    default:
      return "알림";
  }
};

const Alarm = () => {
  const [alarms, setAlarms] = useState(
    [...initialAlarms].sort((a, b) => new Date(b.date) - new Date(a.date))
  );
  const navigate = useNavigate();

  const handleAlarmClick = (alarm) => {
    // 읽음 처리
    setAlarms((prev) =>
      prev.map((a) => (a.id === alarm.id ? { ...a, isRead: true } : a))
    );
    // 이동
    if (alarm.targetType === "chat") {
      navigate(`/chat/${alarm.targetId}`);
    } else if (alarm.targetType === "post") {
      navigate(`/post/detail/${alarm.targetId}`);
    }
  };

  return (
    <S.Container>
      <S.TopBar>
        <S.BackButton onClick={() => navigate(-1)}>
          <img src={backIcon} alt="뒤로 가기" />
        </S.BackButton>
      </S.TopBar>
      <S.AlarmList>
        {alarms.length === 0 ? (
          <div style={{ color: "#888", padding: "32px 0" }}>
            알림이 없습니다.
          </div>
        ) : (
          alarms.map((alarm) => (
            <S.AlarmItem
              key={alarm.id}
              isRead={alarm.isRead}
              onClick={() => handleAlarmClick(alarm)}
            >
              <S.AlarmTitle>{getAlarmTitle(alarm.type)}</S.AlarmTitle>
              <S.AlarmDesc>
                {alarm.postTitle && (
                  <span style={{ color: "#9EC6F3", fontWeight: 500 }}>
                    {alarm.postTitle}
                  </span>
                )}
              </S.AlarmDesc>
              <S.AlarmDate>{alarm.date}</S.AlarmDate>
              <S.BlueDot show={!alarm.isRead} />
            </S.AlarmItem>
          ))
        )}
      </S.AlarmList>
    </S.Container>
  );
};

export default Alarm;
