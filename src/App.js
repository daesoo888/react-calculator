import { useRef ,useEffect ,useState } from 'react';
import './App.css';
import Viewer from './component/Viewer';
import Controller from './component/Controller';
import Even from './component/Even';

function App() {
  const [number , setNumber] = useState(0);
  const [text , setText] = useState('');
  const didmountref = useRef(false);

  const compute = (n) => {
    setNumber(number + n);
  }

  const handle = (e) => {
    setText(e.target.value)
  }

  /*
  useEffect(() => {
    if(!didmountref.current){
      didmountref.current = true;
      return;
    }else{
      console.log('number 업데이트 : ' , number);
      console.log('text 업데이트 : ' , text);
    }

    
  });
*/

/*
  useEffect(() =>{
    console.log('컴포넌트 마운트');
  },[text]);
*/
/*
  useEffect(() => {
    const intervalId = setInterval(() =>{
      console.log('깜빡!!');
    },1000);

    return () =>{
      console.log('클린업');
      clearInterval(intervalId);
    };
    

  });
*/


  return (
    <div className="App">
      <h1>simple counter</h1>

      <section>
        <input value={text} onChange={handle}/>
      </section>

      <section>
        <Viewer number={number}/>
        {number % 2 === 0 && <Even/>}
      </section>
      <section>
        <Controller compute={compute}/>
      </section>
      
    </div>
  );
}

export default App;
