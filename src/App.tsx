import React, {FC} from 'react';
import {Provider} from "react-redux";
import {store} from "./store";
import UserList from "./components/UserList";


function App () {
    return (

       <div>
           <UserList/>
       </div>

    );
}

export default App;
