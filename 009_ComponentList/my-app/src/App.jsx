function App() {
  const productList = {
    products: [
      {
        title: "개발자 무릎 담요",
        price: 17500,
        id: 101,
      },
      {
        title: "Hack Your Life 개발자 노트북 파우치",
        price: 29000,
        id: 102,
      },
      {
        title: "우당탕탕 라이켓의 실험실 스티커북",
        price: 29000,
        id: 103,
      },
      {
        title: "버그를 Java라 버그잡는 개리씨 키링",
        price: 29000,
        id: 104,
      },
    ],
  };

  return (
    <div className="App">
      {/* map은 element, index, array를 갖는다.
          productList는 object로 되어있어서 productList.products <- 이렇게 사용해야한다. */}
      {productList.products.map( (item, index) => (
       
       <>
       <p key={item.id}>
       <h1> {index+1} {item.title} </h1> 
        <h3  style={{fontWeight: "normal"}} >{item.price}원</h3>
       </p>
       </>
        
      ) )
    }
    </div>
  );
}

export default App;