import React from 'react';

export default class login extends React.Component{

constructor(){
   super();

}

render(){

return (

<div>
<h1 ><center>Login Here</center></h1>
<input type="text" className="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
<input type="password" className="form-control" name="password" placeholder="Password" required=""/>
<button type="button" className="btn btn-success"  style={{"margin":"20px"}}  onClick={this.saveNews}>Submit</button>
</div>
)
}
}
