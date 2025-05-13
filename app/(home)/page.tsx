export const metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <div>
      <h1>Hello!</h1>
    </div>
  );
}

// route groups는 routes들을 그룹화해서 logical groups으로 만들수 있는 멋진 기능이 있다
// 예를들어 루트 레이아웃을 사용하지 않고 대신 여러 레이아웃을 사용하게 할수 있다
// 또한 레이아웃 중에서 선택하거나 선택 해제하여 사용할 수 있다
// route groups는 폴더 이름을 괄호로 묶어줘야한다

// Page나 layout에서만 메타데이터를 내보낼 수 있다
// 컴포넌트에서는 metadata를 내보낼 수 없고 또 metadata는 서버 컴포넌트에서만 있을 수 있다
