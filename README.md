# form-builder
Form builder to make forms and reports with html

STEPS TO CREATE HTML STRUCTURE 
1. FORK THE REPOSITORY and go to "key-creation" branch
2. DO npm start to run it on your local
3. Add your serial no. and questions in the respective input field , also there is a extra field if anyone wants to add any extra field .
4. That all the objects that it will create and put it in data.js questionsArray .
5. Add the HTML Structure that you want to repeat in the structureCreator.js file , structureHTML variable .
6. Position your serialNo. , question , keynames ,  extrafield if any , inside the HTML structure that you want to repeat .
7. Save the change and refresh the local server and click on Show HTML Structure 
8. Copy the structure and paste in your respective form or report . 
9. For input forms copy the array in "LIST OF KEYS FOR JAVASCRIPT FILE" and paste in respective index.js file
9. Use "Prettier as a formatter" 
10. For generating the same key report :-
11. Change the structure like in point 5. 
12. Also copy the "LIST OF KEYS FOR OUTPUT REPORT" and put it in emptyKeyArray in structureCreator.js 
13. Change the name of newAllQuestionKeyCombinationArray to emptyKeyArray in your structure
14. It will generate the report for the same. 
