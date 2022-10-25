// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if(!Number(element)){
      wordCount++;
    }    
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function removeCurseWords(text) {
  const curseList = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"]
  let textArray = text.split(" ");
  let isThereCursed = false;
  let curseCount = 0;
  let newPassage = text.split(" ");
  
  textArray.forEach(function(element) {
    curseList.forEach(function(curse) {
      if(element.toLowerCase() === curse.toLowerCase()){
        //textArray[textArray.indexOf(curse)] = "";
        newPassage.splice(newPassage.indexOf(element), 1);
      }
    });
  });

  return newPassage.join(" ").trim();
}

