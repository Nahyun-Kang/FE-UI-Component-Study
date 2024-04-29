# 아코디언 (Accordion) UI

## 👉아코디언의 정의

아코디언은 세로로 쌓여있는 아이템 리스트이다. 각 레이블에 있는 버튼 요소를 상호작용하여 콘텐츠를 숨기거나 펼칠 수 있다.

## 👉아코디언 구현 아이디어

1. 아코디언의 각 구성요소인 레이블을 Label 컴포넌트와 레이블들의 집합인 Accordion 컴포넌트로 구성
2. 최상위 컴포넌트 아코디언 컴포넌트

   1. 현재 활성화된 레이블을 확인하기 위해 useState를 통해 상태를 만들기

   ```jsx
   function Accordion() {
     //현재 활성화된 레이블의 ID
     const [itemId, setItemId] = useState(null);

     //한 레이블의 셰브론 버튼을 클릭할 때, 해당 레이블의 index를 활성화된 레이블 ID로 설정하기 위한 함수
     const handleButtonClick = (number) => {
       //토글을 위한 조건 (현재 활성화된 레이블과 클릭한 레이블의 인덱스가 동일할 경우
   	  // 열었던 아코디언을 닫도록 하기 위해 조건을 설정해주었다.
       if (itemId === number) {
         setItemId(null);
       } else {
         setItemId(number);
       }
     };

   ```

3. 레이블 컴포넌트에서는 현재 활성화된 id와 레이블 고유 번호를 비교하여 같을 경우 활성화된 레이블로 조건 설정, isExpanded라는 변수에 boolean 저장

   ```jsx
   function AccordionLabel({ label, number, activeItemId, onClick }) {
     //동적 스타일링을 편하게 하기 위해 classnames 라이브러리 사용
     const cx = classNames.bind(styles);
     //고유 레이블 번호와 활성화된 id를 비교
     let isExpanded = number === activeItemId;

     // isExpanded 참, 거짓 결과에 따라 클래스네임이 추가되도록 코드 작성
     return (
       <div className={styles.label_container}>
         <div className={styles.label_title}>
           <h2>{label.title}</h2>
           <button
             className={cx('chevron', `${isExpanded && 'up'}`)}
             onClick={() => onClick(number)}
           >
             <Image src={Chevron} width={12} height={12} alt="셰브론" />
           </button>
         </div>
         <div className={cx('label_description', `${isExpanded && 'opened'}`)}>
           <p className={cx('content')}>{label.content}</p>
         </div>
         <div className={styles.line}></div>
       </div>
     );
   }
   ```

## 👉리팩토링 목표

- [ ] 컴파운드 컴포넌트 패턴으로 바꾸기
- [ ] 전역 객체 사용

## 🌟결과물

![ui-ezgif.com-video-to-gif-converter.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/a37e6c17-5ef8-4044-bde0-7167a25d4ac1/3db7519c-6759-4590-a746-e7b344f918ca/ui-ezgif.com-video-to-gif-converter.gif)

### 참고 디자인

https://ui.shadcn.com/docs/components/accordion
