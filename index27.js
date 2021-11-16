 // Create active question variable
 var activeQuestionNum = 1;
 var viewCount = 1;
 var count = 0;
 document.getElementById("question-num").innerText = `Question ${activeQuestionNum} of 4`;
 
// set clicked radio button to unchecked if checked
var inputs = document.getElementsByTagName("input");
 for (var input of inputs) {
     input.setAttribute('onmousedown','this.tag = this.checked;');
     input.setAttribute('onclick','this.checked = !this.tag;');
 }

 
// check if number of radios selected is correct
function atLeastOneRadio() {
    var isChecked = 0;
    var groups = document.getElementById(`question${activeQuestionNum}`).getElementsByTagName('input');
        for (var group of groups) {
            if (group.checked) {
            isChecked++;
                } 
            }
    if (isChecked >= 1){
        return true;
    } else {
        alert("nothing is checked");
        return false;
    }
}



 // function to remove show-active class & add to next
function setNextQuestion() {

    if (!atLeastOneRadio()) {
        return;
    };
    
    
    // remove show-active class from all question containers
    var containers = document.getElementsByClassName('question-container');
     for (var container of containers) {
         container.classList.remove('show-active');
     }
    
    // set active question to next num
    activeQuestionNum++;
    viewCount++;

    // if final question then change title to Results and calculate score
    if (activeQuestionNum === 5) {

        // Change title to results
        document.getElementById("question-num").innerText = `Results`;

        // calculate total score
        var groups = document.getElementsByTagName('input');
        for (var group of groups) {
            if (group.checked && group.value ==="true" ) {
            count++;
                } 
            }
    } else { 
        document.getElementById("question-num").innerText = `Question ${activeQuestionNum} of 4`;
    }

    // add show-active class to question container of activeQuestionNum
    document.getElementById(`question${activeQuestionNum}`).classList.add('show-active');

    // // update question num title
    // document.getElementById("question-num").innerText = `Question ${activeQuestionNum} of 4`;

    // print to check show-active class added
    // console.log(document.getElementById(`question${activeQuestionNum}`).classList);

    
    document.getElementById("total").innerText = `Total Score: ${count}/4`;
    
    
    // showing both buttons after question 1
    if (activeQuestionNum > 1) {
        var containers = document.getElementsByTagName('button');
        console.log(containers);
        for (var container of containers) {
            container.classList.add('show-active');
            console.log(container.classList);
        }
        
    }
    // hiding both buttons on results
    if (activeQuestionNum === 5) {
        var containers = document.getElementsByTagName('button');
        console.log(containers);
        for (var container of containers) {
            container.classList.remove('show-active');
            
        }
    }
    
 }

 // event listener for to call nextQuestion function when click next button
 var nextButtons = document.getElementsByClassName("next");
 for (var butt of nextButtons) {
     butt.addEventListener('click',setNextQuestion);
 }

 // function to remove show-active class & add to previous
 function setPreviousQuestion() {

    // condition to prevent previous question call on question 1
    if (activeQuestionNum === 1) {
        return;
    }

    // get question containers and remove show-active
    var containers = document.getElementsByClassName('question-container');
     for (var container of containers) {
         container.classList.remove('show-active');
     }

    // set active question variable to previous num
    activeQuestionNum--;
    viewCount--;

    // add show-active class to activeQuestionNum container
    var getEl = document.getElementById(`question${activeQuestionNum}`).classList;
    getEl.add('show-active');
    
    // update question num title
    document.getElementById("question-num").innerText = `Question ${activeQuestionNum} of 4`;

    // print active question classes to double check 
    console.log(document.getElementById(`question${activeQuestionNum}`).classList);
 }

  // add event listener to previous button when clicked
  var previousButtons = document.getElementsByClassName("previous");
  for (var butt of previousButtons) {
      butt.addEventListener('click',setPreviousQuestion);
  }


