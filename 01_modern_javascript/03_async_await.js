// 1. 가짜 API 호출 함수 만들기 (Promise 반환)
// 2초 뒤에 사용자 데이터를 줌.
const fetchUser = () => {
  return new Promise((resolve, reject) => {
    const user = {
      id: 1,
      name: "오승하",
      email: "abc@def.ghi",
    };

    console.log("데이터 요청 중 ...");

    setTimeout(() => {
      // 20% 확률로 에러 발생 시뮬레이션
      if (Math.random() > 0.8) {
        reject(new Error("서버 통신 실패!"));
      } else {
        console.log("데이터 수신 완료!");
        resolve(user);
      }
    }, 2000); // 2초 지연
  });
};

// 2. Async / Await로 데이터 받아오기
const getData = async () => {
  try {
    // await: 이 줄이 끝날 때까지 다음 줄로 넘어가지 않고 기다림.
    const user = await fetchUser();

    console.log(`환영합니다. ${user.name}님!`);
    console.log(`이메일: ${user.email}`);
  } catch (error) {
    // try 블록에서 에러가 나면 여기로 점프
    console.error("에러 발생:", error.message);
  } finally {
    // 성공하든 실패하든 무조건 실행
    console.log("--- 작업 종료 ---");
  }
};

// 함수 실행
getData();
