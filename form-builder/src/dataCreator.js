import React from "react";
import { useState, useRef } from "react";
import "./dataCreator.css";

function DataCreator() {
  const [questionList, setQuestionList] = useState([]);
  const [serialNo, setSerialNo] = useState("");
  const [question, setQuestion] = useState("");
  const [num, setNum] = useState(1);
  const [extraField, setExtraField] = useState("");
 
  const [isSubQuestion, setIsSubQuestion] = useState(false)
  function deleteQuestionFunction(id) {
    questionList.pop();
    const newArray = questionList.map((item) => item);
    setNum((prev) => prev - 1);
    setQuestionList(() => newArray);
  }
  function subQuestionChecker(num){
    console.log(questionList , "xnjwnxwj")
   const currentElement = questionList.find(item => item.num == `"${num-1}"`)
    setQuestionList((prev)=>{
      
      return prev.map(item => {
       return item.num == currentElement.num ? {...item , isSubQuestion : `"${true}"`} : item
      })
    })
  }
 
 
  return (
    <div className="border-grey p-30 mb-20">
      <input
        className="border-one p-3 mr-10 mb-8 br-10"
        style={{ width: "300px" }}
        placeholder="Enter serial no."
        value={serialNo}
        onChange={(e) => setSerialNo(e.target.value)}
      />
      <br />
      <input
        className="w-100 border-one p-3 mr-10 mb-8 br-10"
        style={{ width: "800px" }}
        placeholder="Enter question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <br />
      <input
        className="w-100 border-one p-3 mr-10 mb-8 br-10"
        style={{ width: "300px" }}
        placeholder="Enter if any extra fields or ignore this field"
        value={extraField}
        onChange={(e) => setExtraField(e.target.value)}
      />
      <br />
     

     
      <button
        className="p-10 border-none mr-10"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setNum((prev) => prev + 1);
          setQuestionList([
            ...questionList,
            {
              serialNo: `"${serialNo}"`,
              question: `"${question}"`,
              isSubQuestion: `"${false}"`,
              num: `"${num}"`,
              extraField: `"${extraField}"`,
            },
          ]);
          setSerialNo("");
          setQuestion("");
          setExtraField("");
        }}
      >
        Add question
      </button>
      <button
        className="p-10 border-none"
        onClick={() => deleteQuestionFunction(num)}
        style={{ cursor: "pointer" }}

      >
        Delete question
      </button>
      <button
        className="p-10 border-none"
        onClick={() => subQuestionChecker(num) }
        style={{ cursor: "pointer" }}

      >
       Its a sub question ?
      </button>
      <br />
      <div className="mt-15">DATA STRUCTURE IN OBJECT FORMAT</div>
      <div className="border-grey p-30 mb-20">
        {questionList.map((item) => {
          return (
            <>
              {` {
            serialNo : ${item.serialNo} , 
            question :${item.question},
            num :${item.num},
            extraField: ${item.extraField},
            isSubQuestion: ${item.isSubQuestion},
        },`}
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default DataCreator;
