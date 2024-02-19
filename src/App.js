import './css/App.css';
////Delete import below when development is completed
import sampleData from './resources/data';

import loader from './img/loader.gif';

import Card from './Component/Card';
import Header from './Component/Header';
import Layout from './Component/Layout';
import Error from './Component/Error';
import { useEffect, useState } from 'react';


function App() {
  const [data, setData]= useState(false);
  const [loading, setLoading]= useState(true);
  let questionList, content;

  useEffect(()=>{
    // fetch("https://api.rainforestapi.com/request?api_key=3B20726ADA78480FAE237FD784AB4127&type=questions&amazon_domain=amazon.com&asin=B073JYC4XM&page=1&output=json")

    //Delete fetch below when development is completed
    fetch("https://api.rainforestpi.com/request?api_key=3B20726ADA78480FAE237FD784AB4127&type=questions&amazon_domain=amazon.com&asin=B073JYC4XM&page=1&output=json")
    .then((res) => res.json())
    .then((parseData)=>{
      console.log(parseData);
      setData(parseData);
      setLoading(false);
    }).catch((err)=>{
      console.log("Error: Request not successful.");
      console.log(err);
      //Delete setData below when development is completed
      setData(sampleData)
      setLoading(false);
      //
    });
  }, []);

  if(loading){
    content= (<img alt='loading' src={loader} />);
  }else if(data !== false && loading === false){
    questionList= data.questions.reverse().map((content, index) => <Card info={content} firstItem={index === 0 ? true: false} />);
    content= (<Layout product_info={data.product}> {questionList} </Layout>);
  }else{
    content= (<Error  />);
  }


  return (
    <>
      <Header />
      {content}
    </>
  );
}

export default App;
