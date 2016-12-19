import React from 'react';

export default class Jumbo extends React.Component{

constructor(){
    super();
        this.handleChange=this.saveNews.bind(this);
}
saveNews()
{
$.ajax({

         url: "http://localhost:8081/news/adddatatodb",
         type: "POST",
         dataType: 'JSON',
         success : function(msg){
        console.log("saved");

            /*msg reprewsents JSON data of news headlines sent back by external API*/

            }.bind(this),

         error: function(err){

             console.log("Error occured "+err);

         }.bind(this)
});
}


render(){

return (
<div className="row">




{<div className="jumbotron">



<h4> {this.props.author} <a href="">{this.props.newsurl}</a></h4>
<img src={this.props.urlToImage} alt="" style={{width: "300px",float:"left"}}/>

<h4 style={{margin:"10px"}}> {this.props.title}</h4>
<h4 style={{margin:"10px"}}> {this.props.description}</h4>


<h4 style={{margin:"10px"}}> {this.props.publishedAt}</h4>
<button type="button" className="btn btn-info" style={{margin:"15px"}} onClick={this.saveNews}>Save</button>

</div>}

</div>


)
}
}
