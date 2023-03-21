import { newAllQuestionKeyCombinationArray } from "./keyCreator";
let emptyKeyArray = [];

function StructureCreator({ serialNo, question, num, keyCreator, extraField , isSubQuestion}) {
  keyCreator(question);

  const structureHTML2 = `
  <div class="rows">
            <div class="col-1">
              <span class="num-label">${serialNo}</span>
            </div>
            <div class="col-11">
              <label class="ors-form-label">${question}</label>
              <div class="rows">
                <div class="col-5">
                  <div class="main-radio ors-form-control" data-bind="foreach:{data:[{id:'yes',label:'Yes'},{id:'no',label:'No'},{id:'na',label:'NA'}],as:'option'}">
                    <div class="radio-common" data-bind="css:{'selected':vm.formData.${newAllQuestionKeyCombinationArray[num - 1]}()===option.id}">
                      <input type="radio" data-bind="checkedValue:option.id,checked:vm.formData.${newAllQuestionKeyCombinationArray[num - 1]}, attr:{id:'${newAllQuestionKeyCombinationArray[num - 1]}'+'-'+option.id,disabled:vm.isReadOnlyField('${newAllQuestionKeyCombinationArray[num - 1]}'+'-'+option.id)}" value="yes" id="${newAllQuestionKeyCombinationArray[num - 1]}-yes" name="ko_unique_31">
                      <label data-bind="text:option.label, attr:{for:'${newAllQuestionKeyCombinationArray[num - 1]}'+'-'+option.id}" for="${newAllQuestionKeyCombinationArray[num - 1]}-yes">Yes</label>
                    </div>
                  
                    <div class="radio-common" data-bind="css:{'selected':vm.formData.${newAllQuestionKeyCombinationArray[num - 1]}()===option.id}">
                      <input type="radio" data-bind="checkedValue:option.id,checked:vm.formData.${newAllQuestionKeyCombinationArray[num - 1]}, attr:{id:'${newAllQuestionKeyCombinationArray[num - 1]}'+'-'+option.id,disabled:vm.isReadOnlyField('${newAllQuestionKeyCombinationArray[num - 1]}'+'-'+option.id)}" value="no" id="${newAllQuestionKeyCombinationArray[num - 1]}-no" name="ko_unique_32">
                      <label data-bind="text:option.label, attr:{for:'${newAllQuestionKeyCombinationArray[num - 1]}'+'-'+option.id}" for="${newAllQuestionKeyCombinationArray[num - 1]}-no">No</label>
                    </div>
                  
                    <div class="radio-common" data-bind="css:{'selected':vm.formData.${newAllQuestionKeyCombinationArray[num - 1]}()===option.id}">
                      <input type="radio" data-bind="checkedValue:option.id,checked:vm.formData.${newAllQuestionKeyCombinationArray[num - 1]}, attr:{id:'${newAllQuestionKeyCombinationArray[num - 1]}'+'-'+option.id,disabled:vm.isReadOnlyField('${newAllQuestionKeyCombinationArray[num - 1]}'+'-'+option.id)}" value="na" id="${newAllQuestionKeyCombinationArray[num - 1]}-na" name="ko_unique_33">
                      <label data-bind="text:option.label, attr:{for:'${newAllQuestionKeyCombinationArray[num - 1]}'+'-'+option.id}" for="${newAllQuestionKeyCombinationArray[num - 1]}-na">NA</label>
                    </div>
                  </div>
                  <div class="pt-1">
                    <label class="ors-form-label">ISPS Ref: B/6.1.1</label>
                  </div>
                </div>
                <div class="col-7 pl-2">
                  <textarea class="ors-form-textarea" style="height: 27px; resize: none;" name="${newAllQuestionKeyCombinationArray[num - 1]}_remarks" placeholder="Remarks/Evidence/Interview" data-bind="expandable:{min:1},value:vm.formData.${newAllQuestionKeyCombinationArray[num - 1]}_remarks,attr:{readonly:vm.isReadOnlyField('${newAllQuestionKeyCombinationArray[num - 1]}_remarks')}" rows="1"></textarea>
                </div>
              </div>
            </div>
          </div>

  `
 
 const structureHTML1 = `<div class="rows">
 <div class="col-12">
   <label class="ors-form-label">${serialNo} ${question}</label>
   <div class="rows">
     <div class="col-5">
       <div class="main-radio ors-form-control" data-bind="foreach:{data:[{id:'yes',label:'Yes'},{id:'no',label:'No'},{id:'na',label:'NA'}],as:'option'}">
         <div class="radio-common" data-bind="css:{'selected':vm.formData.${newAllQuestionKeyCombinationArray[num - 1]}()===option.id}">
           <input type="radio" data-bind="checkedValue:option.id,checked:vm.formData.${newAllQuestionKeyCombinationArray[num - 1]}, attr:{id:'${newAllQuestionKeyCombinationArray[num - 1]}'+'-'+option.id,disabled:vm.isReadOnlyField('${newAllQuestionKeyCombinationArray[num - 1]}'+'-'+option.id)}" value="yes" id="${newAllQuestionKeyCombinationArray[num - 1]}-yes" name="ko_unique_28">
           <label data-bind="text:option.label, attr:{for:'${newAllQuestionKeyCombinationArray[num - 1]}'+'-'+option.id}" for="${newAllQuestionKeyCombinationArray[num - 1]}-yes">Yes</label>
         </div>
       
         <div class="radio-common" data-bind="css:{'selected':vm.formData.${newAllQuestionKeyCombinationArray[num - 1]}()===option.id}">
           <input type="radio" data-bind="checkedValue:option.id,checked:vm.formData.${newAllQuestionKeyCombinationArray[num - 1]}, attr:{id:'${newAllQuestionKeyCombinationArray[num - 1]}'+'-'+option.id,disabled:vm.isReadOnlyField('${newAllQuestionKeyCombinationArray[num - 1]}'+'-'+option.id)}" value="no" id="${newAllQuestionKeyCombinationArray[num - 1]}-no" name="ko_unique_29">
           <label data-bind="text:option.label, attr:{for:'${newAllQuestionKeyCombinationArray[num - 1]}'+'-'+option.id}" for="${newAllQuestionKeyCombinationArray[num - 1]}-no">No</label>
         </div>
       
         <div class="radio-common" data-bind="css:{'selected':vm.formData.${newAllQuestionKeyCombinationArray[num - 1]}()===option.id}">
           <input type="radio" data-bind="checkedValue:option.id,checked:vm.formData.${newAllQuestionKeyCombinationArray[num - 1]}, attr:{id:'${newAllQuestionKeyCombinationArray[num - 1]}'+'-'+option.id,disabled:vm.isReadOnlyField('${newAllQuestionKeyCombinationArray[num - 1]}'+'-'+option.id)}" value="na" id="${newAllQuestionKeyCombinationArray[num - 1]}-na" name="ko_unique_30">
           <label data-bind="text:option.label, attr:{for:'${newAllQuestionKeyCombinationArray[num - 1]}'+'-'+option.id}" for="${newAllQuestionKeyCombinationArray[num - 1]}-na">NA</label>
         </div>
       </div>
       <div class="pt-1">
         <label class="ors-form-label">ISPS Ref: A/19.4.2.2</label>
       </div>
     </div>
     <div class="col-7 pl-2">
       <textarea class="ors-form-textarea" style="height: 27px; resize: none;" name="${newAllQuestionKeyCombinationArray[num - 1]}_remarks" placeholder="Remarks/Evidence/Interview" data-bind="expandable:{min:1},value:vm.formData.${newAllQuestionKeyCombinationArray[num - 1]}_remarks,attr:{readonly:vm.isReadOnlyField('${newAllQuestionKeyCombinationArray[num - 1]}_remarks')}" rows="1"></textarea>
     </div>
   </div>
 </div>
</div>`
console.log(isSubQuestion,"isSUbQuestion")
  return (
    <>
      {isSubQuestion === `${true}` ? structureHTML2 : structureHTML1} <br />
    </>
  );
}
export default StructureCreator;
