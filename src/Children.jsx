import React,{useEffect,useState} from "react";

const Children =(props)=>{

  // useEffect(()=>{
  //   console.log('я отрисовался')

  //   return ()=>{
  //     console.log('я удалился')
  //   }
  // },[])


  const [delivery,setDelivery] = useState(true)

  // setDelivery((value)=> value = props.count)

  // console.log(num)

  useEffect(()=>{
    if(props.count>=10){
      setDelivery(true)
    } else{
      setDelivery(false)
    }
    
    console.log('значение поменялось')


  },[props.count])


return(

  <div> 
    Children {props.count}
  
  {delivery&&(
    <p>Доставка</p>
  )}
  
  
  </div>
)


}


export default Children