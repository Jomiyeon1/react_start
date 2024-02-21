function Certificate({title, contents}){
    //컴포넌트의 재사용
      return(
        <section>
          <h2>{title}</h2>
          <p> {contents}</p>
      </section>     
    )
  }

export default Certificate;