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
  const [keyword, setKeyword]= useState("");
  let questionList, content;

  useEffect(()=>{
    // fetch("https://api.rainforestapi.com/request?api_key=3B20726ADA78480FAE237FD784AB4127&type=questions&amazon_domain=amazon.com&asin=B073JYC4XM&page=1&output=json")

    //Delete fetch below when development is completed
    fetch("https://api.rainforestpi.com/request?api_key=3B20726ADA78480FAE237FD784AB4127&type=questions&amazon_domain=amazon.com&asin=B073JYC4XM&page=1&output=json")
    .then((res) => res.json())
    .then((parseData)=>{
      console.log(parseData);
      if(parseData.request_info.success) setData(parseData);
      setLoading(false);
    }).catch((err)=>{
      console.log("Error: Request not successful.");
      if(process.env.NODE_ENV === "development"){
        console.log(err);
        console.log("Error: Request not successful.");
      };
      //Delete setData below when development is completed
      setData(sampleData)
      setLoading(false);
      //
    });
  }, []);

  if(loading){
    content= (<img alt='loading' src={loader} />);
  }else if(data !== false && loading === false){
    if (keyword !== '') {
      //Search functionality | search scope include Question and Answer.
      let reg = new RegExp(keyword, "gi");
      questionList = data.questions.filter((content) => (content.question.search(reg) !== -1 || content.answer.search(reg) !== -1));
    }else{
      questionList = data.questions;
    }
    questionList= questionList.reverse().map((content, index) => <Card info={content} firstItem={index === 0 ? true: false} key={content.id}/>);
    content= (<Layout product_info={data.product} search={{ value: keyword, set: setKeyword }}> {questionList} </Layout>);
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
