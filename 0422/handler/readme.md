Event
, Event handler
• 사건=> 사용자가버튼을클릭한사건=> 버튼클릭이벤트
• Event Handler(=Event listener)  : 사용자가 웹 페이지와 상호작용할 때 발생하는 다양한 이벤트(클릭, 마우스 오버, 
키입력등)에반응하여특정동작을수행하는함수입니다

DOM의이벤트
<button onclick="activate()">
Activate
</button>

 React의 이벤트
<button onClick={activate}>
Activate
</button>

기본이벤트핸들러사용법
 React에서 이벤트 핸들러는JSX에서 camelCase로 작성되며, 함수로 전달됩니다.
function ButtonComponent() {
function handleClick() {
alert("버튼이 클릭되었습니다!");
}
}
return <button onClick={handleClick}>클릭</button>;
 위코드에서onClick={handleClick} 부분이 이벤트 핸들러이다. handleClick 함수는 버튼이 클릭될 때 실행됩니다

 DOM event vs React event
•이벤트처리방식(이벤트등록방식)
비교항목DOM 이벤트React 이벤트
이벤트등록방식addEventListener사용JSX에서onEvent속성을사용
이벤트제거방식removeEventListener필요컴포넌트언마운트시자동제거
이벤트네이밍방식소문자(click, change)카멜케이스(onClick, onChange)
this 바인딩필요여부필요할수도있음함수형컴포넌트에서는필요없음
