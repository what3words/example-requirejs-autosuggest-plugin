define(['jquery', 'jquery-typeahead', 'jquery.w3w-autosuggest-plugin.min'], function($) {
  // the jquery-typeahead and jquery.w3w-autosuggest plugins have been loaded.
  $(function() {
    var key = 'YOUR-API-KEY';

    if (!localStorage.getItem('w3wkey')) {
      localStorage.setItem(
        'w3wkey',
        prompt('What is your w3w API key?')
      );
    }
    key = localStorage.getItem('w3wkey');

    $('#w3w').w3wAddress({
      key: key,
      validation: false
    });
  });
});
