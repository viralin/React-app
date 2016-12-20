import React from 'react';

export default class login extends React.Component{

constructor(){
   super();
     this.state={username:"", password:""};
     this.user=this.user.bind(this);
     this.pass=this.pass.bind(this);


}
user(username){
this.setState({"username":username.target.value});
}
pass(password){
this.setState({"password":password.target.value});
console.log(password.target.value)
}
check(){
var login={

"username":this.state.username,
"password":this.state.password
}


$.ajax({
 url: "http://localhost:8081/users/login",
 type: "POST",
data:login,
 success : function(msg){
 console.log(this.state.username);

 alert("logged in successfully")
 console.log(this.users.username);

}.bind(this),
 error: function(err){


   console.log("error in logging in");
 }.bind(this)
});
}

render(){

return (

<div>
<h1 ><center>Login Here</center></h1>
<input type="text" className="form-control" name="username" placeholder="Email Address" required=""  />
<input type="password" className="form-control" name="password" placeholder="Password" required=""/>
<button type="button" className="btn btn-success"  style={{"margin":"20px"}}  onClick={this.check.bind(this)}>Submit</button>
</div>
)
}
}
