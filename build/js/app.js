(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

function JournalEntry(title, body) {
  this.title = title;
  this.body = body;
  this.vowelCount = 0;
  this.consonantCount = 0;
}

JournalEntry.prototype.returnWords = function() {
  return this.body.split(' ').length;
};

JournalEntry.prototype.countVowels = function () {
  var text = this.body.toLowerCase();
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
  this.vowelCount = count;
  this.consonantCount = (original - count);
  return count;
};

JournalEntry.prototype.getTeaser = function () {
  var text = this.body;
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

},{}],2:[function(require,module,exports){
var JournalEntry = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new JournalEntry(title,body);
    var wordCount = newEntry.returnWords();
    newEntry.countVowels();
    var vowels = newEntry.vowelCount;
    var consonants = newEntry.consonantCount;
    var teaser = newEntry.getTeaser();
    $('#output').append("<h2>" + title + "</h2>" + "<h3>"+ teaser + "</h3>" +"<p>"+ body+"</p>"+"<li> Word Count: " + wordCount + "</li>"+"<li> Vowel Count: " + vowels + "</li>"+"<li> Consonant Count: " + consonants + "</li>");
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

},{"./../js/journal.js":1}]},{},[2]);
