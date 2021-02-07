import React from 'react';

const flipCards = (props) => {
  const results = props.value;
  let returnedResults;
  if (results.length>0){
    returnedResults = 
       <img src={results[3].download_url} alt="hi"/>
      }
       
  return (
    <div>
       {returnedResults}
    </div>
  )};

  export default flipCards;