import { Component } from "react";


class Botones extends Component{

 constructor(props){
    super(props)

}
    

render(){
return(
    <div>
        <button onClick={() => alert(this.props.alert.m1)}>Modulo 1 </button>
         <button onClick={() => alert(this.props.alert.m2)}>Modulo 2 </button>
     </div>
)
        

}


}

export default Botones