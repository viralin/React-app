
  import React from 'react';
  import ReactDOM from 'react-dom';
  import NewsSearch from './NewsSearch.jsx'
  import ComponentManager from './ComponentManager.jsx'



  export default class HomeComponent extends React.Component{
    constructor(){
      super();
        this.state={message:[]};

        this.fetchNewsFromExternalAPI=this.fetchNewsFromExternalAPI.bind(this);

    }
    fetchNewsFromExternalAPI(url) {

           console.log("Value of url is "+url);

           $.ajax({

                    url: "https://newsapi.org/v1/articles?source=" + url + "&sortBy=top&apiKey=c128be703cfe41a0bc590aed0c826b03",
                    type: "GET",
                    dataType: 'JSON',
                    success : function(msg){
                    console.log("success :: "+msg);
                        this.setState({
                        message:msg.articles
                      });

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
          <NewsSearch  ajaxUri={this.fetchNewsFromExternalAPI} />
         <ComponentManager cm={this.state.message}/>

      </div>
       )
    }
    }
