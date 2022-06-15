(function() {
  var questions = [{
    question: "To get along with means?  (44th BCS examination)",
    choices: ['to adjust', 'to interest', 'to accompany', 'to walk'],
    correctAnswer: 'to adjust'
  }, 
  {
    question: "The synonym for panoramic is-?     (44th BCS examination)",
    choices: ['scenic', 'narrow', 'limited', 'restricted'],
    correctAnswer: 'scenic'
  }, 
  {
    question: "The antonym for slothful is-?    (44th BCS examination)",
    choices: ['playful', 'sluggish', 'energetic', 'quarrelsome'],
    correctAnswer: 'energetic'
  }, 
  {
    question: "What is the verb form of the word 'ability'?   (44th BCS examination)",
    choices: ['capable', 'enable', 'inability', 'unable'],
    correctAnswer: 'enable'
  },
  {
    question: "What kind of noun is river?   (44th BCS examination)",
    choices: ['material', 'collective', 'proper', 'common'],
    correctAnswer: 'common'
  },
  {
    question: "Who is the author of the first scientific romance 'The time machine'?   (41st BCS examination)",
    choices: ['H. G. Wells', 'Samuel Butler', 'George Moore', 'Henry James'],
    correctAnswer: 'H. G. Wells'
  }, 
   {
    question: "When Ushashi entered ___ the room everybody stopped talking.  (41st BCS examination)",
    choices: ['into', 'to', 'in', 'no preposition'],
    correctAnswer: 'no preposition'
  }, 
   {
    question: "'I will not let you go.' In this sentence 'go' is a/an-?   (41st BCS examination)",
    choices: ['infinitive', 'gerund', 'participle', 'verbal noun'],
    correctAnswer: 'inifinitive'
  }, 
   {
    question: "The play 'The Birthday Party' is written by?   (41st BCS examination)",
    choices: ['Samuel Beckett', 'Henry Livings', 'Harold Pinter', 'Arther Miller'],
    correctAnswer: 'Harold Pinter'
  }, 
   {
    question: "Choose the word opposite in meaning to 'terse'?    (41st BCS examination)",
    choices: ['condise', 'detailed', 'expressive', 'descriptive'],
    correctAnswer: 'detailed'
  }, 
   {
    question: "'Who's that?' In this sentence 'that' is a/an?   (41st BCS examination)",
    choices: ['pronoun', 'conjuction', 'adjective', 'adverb'],
    correctAnswer: 'pronoun'
  }, 
   {
    question: "What is the noun form of the word 'know'?   (41st BCS examination)",
    choices: ['knowing', 'knowledge', 'knowledgeable', 'known'],
    correctAnswer: 'knowledge'
  }, 
   {
    question: "Identify the correct spelling.    (41st BCS examination)",
    choices: ['questionaire', 'questionoir', 'questionnaire', 'questionair'],
    correctAnswer: 'questionnaire'
  }, 
   {
    question: "Who is not a romantic poet?     (41st BCS examination)",
    choices: ['P. B. Shelley', 'S. T. Coleridge', 'John Keats', 'T. S. Eliot'],
    correctAnswer: 'T. S. Eliot'
  }, 
   {
    question: "In Shakespeare's play Hamlet, Hamlet was a prince of ?      (41st BCS examination)",
    choices: ['Norway', 'Britain', 'Denmark', 'France'],
    correctAnswer: 'Denmark'
  }, 
   {
    question: "One whose attitude is 'eat, drink and be merry' is -?    (41st BCS examination)",
    choices: ['Materialistic', 'epicurean', 'cynic', 'stoic'],
    correctAnswer: 'epicurean'
  }, 
   {
    question: "'I shall help you provided you obey me.' Here the word 'provided' is a/an-?   (41st BCS examination) ",
    choices: ['adverb', 'adjective', 'conjuction', 'verb'],
    correctAnswer: 'conjuction'
  }, 
   {
    question: "Adela Quested and Mrs. Moore are characters from the novel?     (41st BCS examination)",
    choices: ['David Copperfield', 'The return of the native', 'A passage to India', 'Adam Bede'],
    correctAnswer: 'A passage to India'
  }, 
   {
    question: "The character 'Alfred Doolittle' is taken from Shaw's play title- ?    (41st BCS examination)",
    choices: ['Pygmation', 'Man and Superman', 'The Doctors dilemma', 'Mrs. Warrens Profession'],
    correctAnswer: 'Pygmation'
  }, 
   {
    question: "Identify the word that remains same in plural form: ?   (42nd BCS examination)",
    choices: ['deer', 'horse', 'elephant', 'tiger'],
    correctAnswer: 'deer'
  }, 
   {
    question: "The word 'flying' in the sentence 'Look at the flying bird' is a: ?  (42nd BCS examination)",
    choices: ['gerundial inifinitive', 'participle', 'verbal noun', 'gerund'],
    correctAnswer: 'participle'
  }, 
   {
    question: "Identify the determiner in the sentence 'Bring me that book.'?   (42nd BCS examination)",
    choices: ['bring', 'me', 'that', 'book'],
    correctAnswer: 'that'
  }, 
   {
    question: "'A passage to India' is written by?   (42nd BCS examination)",
    choices: ['Walt Whitman', 'Nirad C. Choudhuri', 'Rudyard Kipling', 'E. M. Forster'],
    correctAnswer: 'E. M. Forster'
  }, 
   {
    question: "What is the meaning of musk?   (42nd BCS examination)",
    choices: ['a form of drama', 'a face cover', 'a substance used in making perfume', 'a disguise'],
    correctAnswer: 'a substance used in making perfume'
  }, 
   {
    question: "Identify the correctly spelled one: ?  (42nd BCS examination)",
    choices: ['Caesarean', 'Caesarian', 'Ciserian', 'Scissorian'],
    correctAnswer: 'Caesarean'
  }, 
  ];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  



  // Display initial question
  displayNext();
  


  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener if user already clicked a option(during fade animation)
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  


  // Click handler for 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  


  // Click handler for 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  


  // Buttons hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  


  // Creates and returns the div that contains questions and 
  // answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  


  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  


  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  


  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  


  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
    return score;
  }
})();
