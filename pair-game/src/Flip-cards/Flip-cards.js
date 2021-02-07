import React from 'react';
import Card from 'react-bootstrap/Card'

const flipCards = (props) => {
  const results = props.value;
  let returnedResults;
  if (results.length>0){
    returnedResults = 
       <img src={results[0].download_url} alt="hi"/>
      }
       
  return (
    <div>
       {returnedResults}
    </div>
  )};

  export default flipCards;