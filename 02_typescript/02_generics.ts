// 1. 제네릭 (Generics)
// <T>는 Type의 약자, 관습적으로 많이 씀. (아무 이름이나 상관 없음)
function makeBox<T>(item: T): T {
  console.log("상자에 담긴 내용물: ", item);
  return item;
}

// 사용할 때 <> 안에 타입을 지정해줌.
const stringBox = makeBox<string>("문자열 선물");
const numberBox = makeBox<number>(777);
// makeBox<number>("문자열"); // 에러 발생

// 2. 제네릭 인터페이스 (API 응답 타입에 많이 씀)
interface ApiResponse<T> {
  status: number;
  message: string;
  data: T; // 데이터의 모양이 그때그때 다를 때 제네릭을 씀.
}

// 유저 정보 응답
interface User {
  name: string;
  email: string;
}

const userResponse: ApiResponse<User> = {
  status: 200,
  message: "성공",
  data: {
    name: "TypeScript",
    email: "master@ts.com",
  },
};

console.log("응답 데이터: ", userResponse.data);

// 3. 유틸리티 타입 (Utility Types) - 기존 타입 재활용
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

// 3-1. Partial<T>: 모든 속성을 선택적(?)으로 바꿈
// 상품 수정할 때, 이름만 바꿀 수도 있고 가격만 바꿀 수도 있음.
const updateProduct = (product: Partial<Product>) => {
  console.log("업데이트할 정보: ", product);
};
updateProduct({ price: 5000 }); // id나 name이 없어도 OK

// 3-2. Pick<T, K>: 원하는 속성만 선택해서 가져옴.
// 상품 목록 보여줄 땐 설명(description)이 필요 없을 수 있음.
type ProductPreview = Pick<Product, "id" | "name" | "price">;

const productPreview: ProductPreview = {
  id: 1,
  name: "새우깡",
  price: 1500,
  // description은 여기서 쓸 수 없음
};

// 3-3. Omit<T, K>: 특정 속성만 뺌 (Pick의 반대)
// 민감한 정보(예: 비밀번호)를 뺄 때 유용함.
type ProductSimple = Omit<Product, "description">; // description만 제외
