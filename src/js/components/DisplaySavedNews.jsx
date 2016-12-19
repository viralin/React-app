import React from 'react';

export default class NewsDisplay extends React.Component{

constructor(){
   super();
       this.state={comments:""};
      this.DeleteNews=this.DeleteNews.bind(this);
      this.updateClick=this.updateClick.bind(this);
      this.updateComments=this.updateComments.bind(this);

}
updateComments(cmnt){
console.log(cmnt)
 this.setState({comments: cmnt.target.value});
}

updateClick(){
var myObj={
       comments:this.state.comments,
       title:this.props.news.title
       }
       console.log(myObj);
 $.ajax({
    url:" http://localhost:8081/news/update",
    type: "PUT",
    data:myObj,
     success : function(msg){
      alert("Your comment is :-"+myObj.comments);
     console.log(myObj.comments);
     console.log("inside update");
     window.location.reload();
    }.bind(this),

});
}
DeleteNews()
{
$.ajax({

         url: " http://localhost:8081/news/delete",
         type: "DELETE",
         data:this.props.news,

         success : function(msg){
        console.log("deleted");
        alert("Data deleted successfully");

            /*msg reprewsents JSON data of news headlines sent back by external API*/

            }.bind(this),

         error: function(err){

             console.log("Error occured "+err);

         }.bind(this)
});
}




render(){

return (

<div>
<section className="container">

               <div className="jumbotron row">
                <div className="col-sm-12">
                <h2>{this.props.news.title}-{this.props.news.author}</h2>

                </div>
                    <div className="col-sm-6">
                    <img src={this.props.news.urlToImage} alt="no image" width="500px" height="300px"/>

                  </div>
                <div className="col-sm-6">
                <p><b>Comments :-</b>{this.props.news.comments}</p>


                <p><b>Description :-</b>{this.props.news.description}<a href={this.props.news.url} target="_blank">read more...</a></p>

                  <button type="button" className="btn btn-warning btn-lg" data-toggle="modal" data-target="#myModal">Update</button>


<div className="modal fade" id="myModal" role="dialog">
<div className="modal-dialog">


  <div className="modal-content">
    <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal">&times;</button>
      <h4 className="modal-title">Comments</h4>
    </div>
    <div className="modal-body">
        <form className="form-horizontal">
          <div className="form-group">
                          <div className="col-lg-12">
                          <textarea class="form-control" id="comments" placeholder="post your comments..!" onChange={this.updateComments.bind(this)} cols="75" rows="6"></textarea>

                        </div>
                      </div>
        </form>
    </div>
    <div className="modal-footer">
      <button className="btn btn-default" type="button" onClick={this.updateClick.bind(this)}>Save</button>
      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
    </div>
  </div>

</div>
</div>

              &nbsp;&nbsp;&nbsp;&nbsp;
               <button type="button" className="btn btn-danger btn-lg" onClick={this.DeleteNews}>Delete</button>
               </div>
              </div>
            </section>


</div>
)
}
}
