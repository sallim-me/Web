// 공통 더미 데이터: 채팅방 목록 + 각 채팅방의 메시지
export const chatRooms = [
  {
    id: "1",
    postId: "1",
    nickname: "김철수",
    postTitle: "삼성 냉장고 팝니다",
    lastMessage: "아직 구매 가능할까요?",
    lastTime: "14:34",
    unread: false,
    messages: [
      {
        id: 1,
        content: "안녕하세요! 냉장고 아직 있나요?",
        time: "14:30",
        isMine: false,
        date: "2024년 3월 15일",
      },
      {
        id: 2,
        content: "네, 아직 있습니다!",
        time: "14:31",
        isMine: true,
        date: "2024년 3월 15일",
      },
      {
        id: 3,
        content: "아직 구매 가능할까요?",
        time: "14:34",
        isMine: false,
        date: "2024년 3월 15일",
      },
    ],
  },
  {
    id: "2",
    postId: "2",
    nickname: "이영희",
    postTitle: "LG 통돌이 세탁기 급처",
    lastMessage: "내일 오후 2시에 만날 수 있을까요?",
    lastTime: "어제",
    unread: true,
    messages: [
      {
        id: 1,
        content: "세탁기 상태는 어떤가요?",
        time: "10:15",
        isMine: false,
        date: "2024년 3월 16일",
      },
      {
        id: 2,
        content: "거의 새것과 같습니다. 한번 보시겠어요?",
        time: "10:20",
        isMine: true,
        date: "2024년 3월 16일",
      },
      {
        id: 3,
        content: "내일 오후 2시에 만날 수 있을까요?",
        time: "10:25",
        isMine: false,
        date: "2024년 3월 16일",
      },
    ],
  },
  {
    id: "3",
    postId: "5",
    nickname: "박민수",
    postTitle: "삼성 비스포크 냉장고",
    lastMessage: "빠른 답변 감사합니다!",
    lastTime: "월",
    unread: false,
    messages: [
      {
        id: 1,
        content: "냉장고 소음 심한가요?",
        time: "15:30",
        isMine: false,
        date: "2024년 3월 17일",
      },
      {
        id: 2,
        content: "아니오.",
        time: "15:35",
        isMine: true,
        date: "2024년 3월 17일",
      },
      {
        id: 3,
        content: "빠른 답변 감사합니다!",
        time: "15:40",
        isMine: false,
        date: "2024년 3월 17일",
      },
    ],
  },
];
