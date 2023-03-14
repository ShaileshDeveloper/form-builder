import React from "react";
import { useState, useRef } from "react";
import "./dataCreator.css";

function DataCreator() {
  const [questionList, setQuestionList] = useState([]);
  const [subQuestionList, setSubQuestionList] = useState([]);
  const [serialNo, setSerialNo] = useState("");
  const [question, setQuestion] = useState("");
  const [num, setNum] = useState(1);
  const [extraField, setExtraField] = useState("");
  const [subNum, setSubNum] = useState(1)
  const [subSerialNo, setSubSerialNo] = useState("");
  const [subQuestion, setSubQuestion] = useState("");
  const [showSubQuestionInputField, setShowSubQuestionInput] = useState(false)
  const [hasSubQuestion, setHasSubQuestion] = useState(false)
  function deleteQuestionFunction(id) {
    questionList.pop();
    const newArray = questionList.map((item) => item);
    setNum((prev) => prev - 1);
    setQuestionList(() => newArray);
  }
  function deleteSubQuestionFunction(id) {
    subQuestionList.pop();
    const newArray = subQuestionList.map((item) => item);
    setSubNum((prev) => prev - 1);
    setSubQuestionList(() => newArray);
  }
  function addSubQuestionToParentFunction(currentNum) {
    const currentParentQuestion = questionList.find(item => item.num == `"${currentNum - 1}"`)
    return setQuestionList(() => {
      return questionList.map(item => item.num === `${currentParentQuestion.num}` ? {
        ...item, subQuestionList: subQuestionList
      } : item)
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
      {hasSubQuestion ? <div className="p-30">
        <input
          className="border-one p-3 mr-10 mb-8 br-10"
          style={{ width: "300px" }}
          placeholder="Enter subserial no."
          value={subSerialNo}
          onChange={(e) => setSubSerialNo(e.target.value)}
        />
        <br />
        <input
          className="w-100 border-one p-3 mr-10 mb-8 br-10"
          style={{ width: "800px" }}
          placeholder="Enter subquestion"
          value={subQuestion}
          onChange={(e) => setSubQuestion(e.target.value)}
        />
        <br />

        <button
          className="p-10 border-none mr-10"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setSubNum((prev) => prev + 1);
            setSubQuestionList([
              ...subQuestionList,
              {
                subSerialNo: `"${subSerialNo}"`,
                subQuestion: `"${subQuestion}"`,
                subNum: `"${subNum}"`,

              },
            ]);
            setSubSerialNo("");
            setSubQuestion("");
          }}
        >
          Add Sub question
        </button>
        <button
          className="p-10 border-none mr-10"
          onClick={() => deleteSubQuestionFunction(subNum)}
          style={{ cursor: "pointer" }}
        >
          Delete Sub question
        </button>
        <button
          className="p-10 border-none"
          onClick={() => addSubQuestionToParentFunction(num)}
          style={{ cursor: "pointer" }}
        >
          Add above subquestions to the parent question
        </button>
        <div className="mt-15">SUB QUESTION DATA STRUCTURE IN OBJECT FORMAT</div>
        <div className="border-grey p-30 mb-20">
          {subQuestionList.map((item) => {
            return (
              <>
                {` {
            subSerialNo : ${item.subSerialNo} , 
            subQuestion :${item.subQuestion},
            subNum :${item.subNum},
        },`}
                <br />
              </>
            );
          })}
        </div>
      </div>

        : <></>}

      <button
        className="p-10 border-none mr-10"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setHasSubQuestion(value => true)

        }}
      >
        Press here if the above question has sub question
      </button>
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
              hasSubQuestion: `"${false}"`,
              num: `"${num}"`,
              extraField: `"${extraField}"`,
            },
          ]);
          setSerialNo("");
          setQuestion("");
          setExtraField("");
          setHasSubQuestion(value => false)
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
      <br />
      <div className="mt-15">DATA STRUCTURE IN OBJECT FORMAT</div>
      <div className="border-grey p-30 mb-20">
        {console.log(questionList, "xwnxjwnjx")}
        {questionList.map((item) => {
          return (
            <>
              {` {
            serialNo : ${item.serialNo} , 
            question :${item.question},
            num :${item.num},
            extraField: ${item.extraField},
            hasSubQuestion: ${item.hasSubQuestion},

            subQuestionList:[ ${ item.subQuestionList ?  subQuestionList.map(item => {
              return  `{
                subSerialNo : ${item.subSerialNo} , 
                subQuestion : ${item.subQuestion} ,
                subNum      : ${item.subNum}
               
              }`
            }): []}]

            }
            
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
