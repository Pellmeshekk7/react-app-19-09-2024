import './App.css'
import Heading from './components/Heading';
import Link from './components/Link';




function NameOfLastName(){
  const namee  = true;
  return <h3>{namee === true ? 'Aleksey' :'Denisov'}</h3>
}

function App() {
  const name= 'Aleksey';
  const isAdult = true;
  return (
    <>
     <h1 className='heading'>{isAdult===true ? 'hello' :'hi'} {name}!</h1>
     <Heading />
     <NameOfLastName  titleContent='something text' userName={name} />
     <Link href='https://google.com' content='google'/>
    </>
  )
}

export default App
