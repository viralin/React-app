import React from 'react';

export default class NewsDisplay extends React.Component{

constructor(){
 super();
    this.DeleteNews=this.DeleteNews.bind(this);
    this.Update=this.Update.bind(this);
    this.state={Commentsdata:" "};
}
DeleteNews()
{

$.ajax({

       url: " http://localhost:8081/news/delete",
       type: "DELETE",
       data:this.props.news,
       success : function(msg){

      alert("deleted successfully");

          /*msg reprewsents JSON data of news headlines sent back by external API*/

          }.bind(this),

       error: function(err){

           console.log("Error occured "+err);

       }.bind(this)
});
}
Update(){

$.ajax({
 url: "http://localhost:8081/news/update",
 type: "PUT",
data:'title=' +this.props.news.title + '&Comments='+this.state.Commentsdata,
 success : function(msg){

 alert("comments updated")
 console.log(this.props.news.title);

}.bind(this),
 error: function(err){


   console.log("error in Updating Comments");
 }.bind(this)
});
}
toUpdate(arg){
this.setState({Commentsdata:arg.target.value});
}



render(){

return (

<div>
         <div className="jumbotron" style={{margin:"15px"}}>
             <div className="row">
             <div className="col-sm-1">
             </div>
                 <div className="col-sm-5">
                   <img src={this.props.news.urlToImage} width="500px" height="300px"/>


                 </div>
               <div className="col-sm-5">
               <h4><b>Author :- </b>{this.props.news.author}</h4>
               <h4><b>Title :- </b>{this.props.news.title}</h4>
               <h4><b>Description :- </b>{this.props.news.description}</h4>
               <h4><b>PublishedAt :- </b>{this.props.news.publishedAt}</h4>
               <h4><b>Comments :-  </b>{this.props.news.Comments}</h4>






             <textarea onChange={this.toUpdate.bind(this)}>{this.state.Commentsdata}</textarea>
             <br/>
                 <button type="button" className="btn btn-info" onClick={this.Update.bind(this)}>Update</button>
                 <button type="button" className="btn btn-info" onClick={this.DeleteNews} style={{margin:"10px"}}>Delete</button>
               </div>
               <div className="col-sm-1">
               </div>
             </div>
           </div>
</div>
)
}
}
