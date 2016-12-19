import React from 'react';

export default class NewsDisplay extends React.Component{

constructor(){
   super();
      this.saveNews=this.saveNews.bind(this);
}
saveNews()
{
$.ajax({

         url: " http://localhost:8081/news/adddatatodb",
         type: "POST",
         data:this.props.data,
         success : function(msg){
         console.log("saved");
         alert("Your Data was saved");

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
           <div className="jumbotron">
               <div className="row">
                   <div className="col-sm-6">
                     <img src={this.props.data.urlToImage} width="500px" height="300px"/>


                   </div>
                 <div className="col-sm-6">

                 <h4>{this.props.data.author}</h4>
                 <h4>{this.props.data.title}</h4>
                 <h4>{this.props.data.description}</h4>
                 <h4>{this.props.data.publishedAt}</h4>

                 <a href={this.props.data.url}>
                  <button type="button" className="btn btn-primary" style={{"margin":"20px"}} >Read More</button>
                  </a>


                 <button type="button" className="btn btn-success"  style={{"margin":"20px"}}  onClick={this.saveNews}>Save</button>

                 </div>
               </div>
             </div>
</div>
)
}
}
