var Journal = require('./../js/journal.js').journalModule;

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
