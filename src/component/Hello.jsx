import { useState } from 'react';

export default function Hello() {
    const [name, setName] = useState('World');

    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('blue');

    const [subscriptions, setSubscriptions] = useState(false);

    function increment() {
        setCount(prevCount =>prevCount + 1);
        setTheme('red');
    }
    function decrement() {
       if (count > 0) {
        setCount(prevCount =>prevCount - 1);
         }
        setTheme('orange');
           
    }

    function subscribe() {
        setSubscriptions(true);
    }   
    return (
        <div>
        <h1>Hello {name}!</h1>
        <input value={name} onChange={e => setName(e.target.value)} />



      <div>
        <h1 onClick={decrement}>-</h1>
        <h1>{count}</h1>
        <h1>{theme}</h1>
        <h1 onClick={increment}>+</h1>
      </div>

      <div>
        <h1>{subscriptions ?  'Thanks for subscribing' : 'plz subscribe ' }</h1>
        <button onClick={subscribe}>Subscribe</button>
      </div>
        
        
      </div>

    );
}