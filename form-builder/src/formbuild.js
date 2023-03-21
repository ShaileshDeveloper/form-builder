import React from "react";
import questionsArray from "./data";
import JsListCreator from "./JSListCreator";
import KeyListCreator from "./KeyListCreator";
import keyCreator, { newAllQuestionKeyCombinationArray } from "./keyCreator";
import StructureCreator from "./structureCreator";
import ApiListCreator from "./apiListCreator";
import "./dataCreator.css"

function Formbuild() {
  return (
    <div>
      <div className="mb-8 mt-15 color">HTML STRUCTURE</div>

      {questionsArray.map((item) => (
        <>
          <div className="border-grey mb-8 p-10">
            <StructureCreator
              key={item.num}
              num={item.num}
              serialNo={item.serialNo}
              question={item.question}
              keyCreator={keyCreator}
              extraField={item.extraField}
              isSubQuestion={item.isSubQuestion}
            />
          </div>
        </>
      ))}
      <div className="mb-8 mt-15">LIST OF KEYS FOR JAVASCRIPT FILE</div>
      <div className="border-grey p-10">
        <JsListCreator array={newAllQuestionKeyCombinationArray} />
      </div>
      <div className="mb-8 mt-15">LIST OF KEYS FOR OUTPUT REPORT</div>
      <div className="border-grey p-10 mb-8" style={{ wordBreak: "break-word" }}>
        <KeyListCreator array={newAllQuestionKeyCombinationArray} />
      </div>
      <div className="mb-8 mt-15">LIST OF KEYS FOR API MAPPING</div>

      <div className="border-grey p-10 mb-8" style={{ wordBreak: "break-word" }}>
        <ApiListCreator array={newAllQuestionKeyCombinationArray} />
      </div>
    </div>
  );
}

export default Formbuild;
