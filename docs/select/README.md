# 셀렉트 (Select) UI

## 👉셀렉트의 정의

일반적으로 드롭 다운과 동일한 의미로 사용됩니다. 둘 다 사용자가 선택할 수 있는 목록을 표시하는 UI 요소를 가리키는 용어입니다

## 👉셀렉트 구현 아이디어

1. 활성화된 상태 데이터가 보여지면서, 상호작용 시, 드롭다운 메뉴가 나타나게 하는 메인 버튼 컴포넌트
2. 버튼 컴포넌트가 누르면 등장하게 될 옵션들의 목록들이 담긴 컴포넌트
3. 크게 드롭다운이 열려있는지 닫혀있는지 확인하기 위한 state, selected된 옵션을 관리할 상태 두 개 관리

### 상태 관리

```jsx
// 옵션의 경우 사용 범위가 더 넓기에 prop drilling이 일어날 수 있기 때문에 전역으로 상태관리
const OptionContext = createContext();

export default function SelectComponent() {
	//드롭다운 활성화, 비활성화 상태 관리용
  const [isOpened, setIsOpened] = useState(false);
  //활성화된 옵션 상태 관리 용
  const [selectedOption, setSelectedOption] = useState(null);

```

### 드롭다운 외부 영역 클릭 시, 드롭다운 비활성화되게 만들기

```jsx
const handleOutsideClick = (event) => {
  if (ref.current && !ref.current.contains(event.target)) {
    setIsOpened(false);
  }
};

useEffect(() => {
  document.addEventListener('mousedown', handleOutsideClick);

  return () => {
    document.removeEventListener('mousedown', handleOutsideClick);
  };
}, []);
```

## 👉리팩토링 목표

- [ ] 드롭다운 키보드로 상호작용하게 만들기

## 🌟결과물

![셀렉트 gif.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/a37e6c17-5ef8-4044-bde0-7167a25d4ac1/0107f79c-c876-4c92-bd34-e1c6721efb48/%EC%85%80%EB%A0%89%ED%8A%B8_gif.gif)

### 참고 디자인

https://ui.shadcn.com/docs/components/select
