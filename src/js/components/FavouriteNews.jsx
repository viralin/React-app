var React = require('react');
import NewsDisplay from './DisplaySavedNews.jsx';
export default class FavNews extends  React.Component{
constructor(){
   super();
      this.Favourites=this.Favourites.bind(this);
      this.state={str:[]};
}

componentDidMount()
{

this.Favourites();
}

Favourites()
{

$.ajax({


         url: "http://localhost:8081/news/view",
         type: "GET",
         dataType: 'JSON',

         success : function(msg){
        console.log("viewed");
              this.setState({str:msg});
            /*msg reprewsents JSON data of news headlines sent back by external API*/

            }.bind(this),

         error: function(err){

             console.log("Error occured "+err);

         }.bind(this)
});
}
render()
{
var object=this.state.str.map(function(e){



 return(
 <NewsDisplay news={e} />

 );
}
);
return(
<div>
{object}
</div>
)
}
}
