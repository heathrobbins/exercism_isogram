function isIsogram(word) {
 if (isIsogramBool(word)) {
   console.log("yes");
  } else {
    console.log("no");
  }
}
 function isIsogramBool(word) {
   for (var i = 0; i < word.length - 1; i++) {
      for (var j = i + 1; j < word.length; j++) {
             if (word[i] === word[j]) {
                   return false;
             }
      }
   }
   return true;
  }
/* test cases */
isIsogram("lumberjack");
isIsogram("bastard");
isIsogram("hockey");
