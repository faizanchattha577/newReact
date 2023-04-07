
import React from 'react';
// import Hello from './component/Hello';

// import Counter from './component/Counter';
// import HookMouse from './component/HookMouse';
// import HookDisplay from './component/HookDisplay';
// import DataFetch from './component/DataFetch';
// import ContextCompA from './component/ContextCompA';

// import ReducerHook from './component/ReducerHook';
import LoginForm from './component/LoginForm';


export const UserContext = React.createContext()
function App() {

  return (
    <div  >
      {/* <Hello name='faizan' desigination=' software Engeenier'/>
      <p>this is from optimus fox</p>
      <Hello  name='shawal'  desigination=' software Engeenier'/>
      <p>ksbdasksb</p>
      <Hello  name='mubeen' desigination=' software Engeenier'/>
      <Hello/> */}

      {/* <Counter/> */}
     {/* <HookDisplay/> */}
       {/* <HookMouse/> */}
        {/* <DataFetch/> */}

        {/* <UserContext.Provider value={'faizan'}>
        <ContextCompA/>

        </UserContext.Provider> */}

        {/* <ReducerHook/> */}

        <LoginForm/>
    </div>
  );
}

export default App;
