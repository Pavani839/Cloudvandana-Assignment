function reverseWords(sentence) {
    // Split the sentence into an array of words
    var words = sentence.split(" ");
  
    // Reverse each word in the array
    var reversedWords = words.map(function(word) {
      return word.split("").reverse().join("");
    });
  
    // Join the reversed words back into a sentence
    var reversedSentence = reversedWords.join(" ");
  
    return reversedSentence;
  }
  
  // Example usage
  var sentence = "This is a sunny day";
  var reversedSentence = reverseWords(sentence);
  console.log(reversedSentence);
  