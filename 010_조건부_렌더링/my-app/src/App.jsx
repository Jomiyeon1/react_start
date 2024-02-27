import { useState} from 'react'
import One from './Components/One'
import Two from './Components/Two'
import Three from './Components/Three'

function ContentsContainer({listName}){
    if(listName === 'one'){
      return <One/>
    }else if(listName === 'two'){
      return <Two/> 
    }else if(listName === 'three'){
      return <Three/>
    }
}

function App() {
  const [listName, setListName] = useState('one')
  const handleCheckId = (e) => {
    setListName(e.target.id)
  }
  return (
    <>
      <nav>
        <li
          id='one'
          style={listName === 'one' ? {color:'red'} : {color:'skyblue'}}
          onClick={handleCheckId}
        >One</li>
        <li
          id='two'
          style={listName === 'two' ? {color:'red'} : {color:'skyblue'}}
          onClick={handleCheckId}
        >Two</li>
        <li
          id='three'
          style={listName === 'three' ? {color:'red'} : {color:'skyblue'}}
          onClick={handleCheckId}
        >Three</li>
      </nav>
      <ContentsContainer listName={listName} />
    </>
   )
}
    export default App;