import React from 'react';
import NewsDisplay from './NewsDisplay.jsx';
export default class ComponentManager extends React.Component{

constructor(){
    super();




}

  render(){
  console.log("Inside COmponent Manager Render"+this.props.cm);
 var newAr=this.props.cm.map(function(e){
     return  <NewsDisplay data={e} />
 });

console.log(newAr)
return (
<div>
{newAr}
</div>
)

}
}
