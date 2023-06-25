

function wordCounter(text){
  let wordCount = 0;
  text = text.split(" ");
  text.forEach(function(word){
    if(word && !Number(word) && word != " "){
      wordCount++;
    }
  });
  
  return wordCount; 

  }   
  
  function numberOfOccurences(text, word){
    let wordCount = 0;
    text = text.split(" ");
    text.forEach(function(textWord){
      if(textWord.toLowerCase().includes(word.toLowerCase())){
        wordCount++;
      }
    });
    return wordCount;
  }



  function censorForTheKids(paragraph) {
    const badWords =['zoinks',  'muppeteer', 'biffaroni', 'loopdaloop'];
    badWords.forEach(function(word) {
      paragraph = paragraph.split(word).join('*****');
      paragraph = paragraph.split(word.charAt(0).toUpperCase() + word.slice(1)).join('*****');
    });

    return paragraph;
  }

  function commonWords(str){
    let result = 'Most common words: ';
    let wordCounts = [];
    let strArr = str.split(' ');
    strArr.forEach(function(word){
      let wordCount = numberOfOccurences(str, word);
      if (!wordCounts.join('').includes(word)){
        wordCounts.push([wordCount, word]);
      }
    });

    wordCounts.sort();
    wordCounts.reverse();
    wordCounts.forEach(function(word){
      result += `${word[1]}: ${word[0]} times. `;
    });



    return result;
  }



/*
Write a function that omits offensive words from a text passage. For the purpose of this application, 
there are only four offensive words to worry about: zoinks, muppeteer, biffaroni, and loopdaloop. 
These words make the investors behind Text Analyzer fly into a rage. We recommend not using real offensive 
words because they are, well, offensive! Use TDD to build your function.
*/

/*
Describe: censorForTheKids
Test: "It should return * if the word is zoinks"
Code:
censorForTheKids("zoinks");
Expected Output: "*";

*/

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurences(passage, word);
  const censoredParagraph = censorForTheKids(passage);

  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  document.getElementById("censored-result").innerText = censoredParagraph;
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});