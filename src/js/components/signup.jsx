import React from 'react';
import {browserHistory} from 'react-router';


export default class signup extends React.Component
{

/*this is a ajax function for the URL of saving of login ID and password*/
signup()
{
var uname=document.getElementById('userid').value;
var pass=document.getElementById('password').value;

  $.ajax({
  url: "http://localhost:8081/users/usertest",
  type: "POST",
  data:'username='+uname+'&password='+pass,
  success : function(msg)
  {
  console.log("successfully loged to database");

    alert("succesfully Registered");
    browserHistory.push('/home');
  }.bind(this),
  error: function(err){

 }.bind(this)
});

}
/*closed ajax function*/



  render()
   {
      return(
    <div>
      <div className="container">
           <div className="row">
                <div className="well">
                  <center>
                    <b>  Enter Username :</b><input type="text" class="form-control" id="userid" style={{"width":"50%"}}/><br/><br/>
                    <b> Enter  Password: </b><input type="password" class="form-control" id="password"  style={{"width":"50%"}}/>
                            
                      <div className="checkbox">
                      <input type="checkbox" /> remember me?
                          </div>
                      </center>
                            <input type="button"  value="Register" className="btn btn-success" onClick={this.signup.bind(this)} style={{"margin-left":"45%"}}/>
                </div>
             </div>
      </div>
</div>


          )
  }
}
