(참고) 라이프 사이클 - class component
1. 마운트(mount) : 처음 컴포넌트가 나타났을 때
- constructor
- getDerivedStateFromProps
- render
- domponentDidMount
2. 업데이트(update) : 컴포넌트 상태값이 바뀔 때
- getDerivedStateFromProps 
- shouldComponentUpdate
- render
- componentWillUpdate
- componentDidUpdate
3. 언마운트(unmount) : 컴포넌트가 사라질 때
- componentWillUnmount
