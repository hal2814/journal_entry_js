
function JournalEntry(title, body) {
  this.title = title;
  this.body = body;
  this.vowelCount = 0;
  this.consonantCount = 0;
}

JournalEntry.prototype.returnWords = function() {
  return body.split(' ').length;
};

JournalEntry.prototype.countVowels = function () {
  var text = body.toLowerCase();
  text = text.split(" ");
  text = text.join('');
  original = text.length;
  var vowels = "aeiou";
  var count = 0;
  for (var i = 0; i < text.length; ++i){
    for (var j = 0; j < vowels.length; ++j){
      if (text.charAt(i) === vowels.charAt(j)){
        count +=1;
      }
    }
  }
  vowelCount = count;
  consonantCount = (original - count);
  return count;
};

JournalEntry.prototype.getTeaser = function () {
  var text = body;
  text = text.split('.');
  var sentence = text[0].split(' ');
  var sentenceLength = sentence.length;

  if (sentenceLength > 8) {
    return sentence.slice(0, 8).join(" ") + ". . .";
  } else {
    return text[0];
  }
};


exports.journalModule = JournalEntry;
