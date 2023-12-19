// import React from "react";

// import UserName from './UserName'

// let USERS = [
//   { id: 1, name: 'Alex', surname: 'test_1', age: 20, passportId: 123 },
//   { id: 2, name: 'Alex', surname: 'test_2', age: 20, passportId: 66 },
//   { id: 3, name: 'John', surname: 'test_3', age: 56, passportId: 123 },
//   { id: 4, name: 'Bob', surname: 'test_4', age: 10, passportId: 50 },
// ];

// const App = () => {

//  const[_, forceUpdate]= React.useReducer(x=>x+1,0)

//   const changeName = (id, newName) => {
//     USERS = USERS.map((user)=>{

//       if(user.id === id){
//         return {
//           id:user.id,
//           name: newName,
//           surname: user.surname,
//           age: user.age,
//           passportId: user.passportId
//         }
//       }
//       return user
//     })
     
//     console.log(USERS)
//     forceUpdate()
//   }



//   const data =[]

//   USERS.forEach((user)=>{
//     const key = generateKey(user)

//     data.push(
//     <div key={key}>
//       <UserName 
//       userName = {user.name}
//       userSurname = {user.surname}
//       userAge = {user.age}
//       userId = {user.id}
//       changeName = {changeName}
      
//       />
//       {/* <p className='test' >{user.name} {user.surname}</p> */}
//     </div>
//   )
// })

//   return (
//     <div>  
//     {data}
//     </div>
// );
// };


// function generateKey(user){
//  return `${user.name}_${user.surname}_${user.age}_${user.passportId}`
// }

// export default App


// import React, { useState } from "react";
// import './index.css'

// const App = () => {

// // const [isDark, setIsDark] = useState(true)

// // return (

//   // <div className={isDark?"dark":'light'}>
//   //    <button onClick={()=>{
//   //   setIsDark((value)=>!value)
//   //    }}>Переключить тему</button>
//   // </div>

//   // const [name,setName] = useState('')
//   // const [password,setPassword] = useState('')

//   const onChangeName = (event) => {
//     // setName(event.target.value)
    
//     setData({name:event.target.value, password: data.password})
//   }
//   const onChangePassword = (event) => {
//     // setPassword(event.target.value)
//     setData({name:data.name, password: event.target.value})
//   }

//   const [data,setData] = useState({name:'',password:''})


// return(
//   <div>
//     <input type="text" onChange={onChangeName}/>
//     <input type="password" onChange={onChangePassword}/>

//     <p>Ваше имя: {data.name} </p>
//     <p>Ваш пароль: {data.password} </p>
//   </div>

// )
// }

// export default App

import React, { useEffect, useState } from "react";
import Children from "./Children";

const App = () => {

  const [state,setState] = useState(false)
  const onClickHandler=()=>{
    // setState(!state)
    setState((value)=>!value)
  }

  const [count,setCount] = useState(0)
  const countHandler=()=>{
    // setState(!state)
    setCount((value)=> ++value)
  }



  return(

    <div> 
      <p>{count}</p>

      <button onClick={countHandler}>++++</button>

      <button onClick={onClickHandler}>switch</button>

    {state && <Children count ={count} />}

    </div>

  )
}

export default App