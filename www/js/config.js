// Configure loading modules from the lib directory,
// and jquery-typeahead from vendor,
// except 'app' ones,
requirejs.config({
  'baseUrl': 'js/lib',
  'paths': {
    'app': '../app',
    'jquery': 'https://code.jquery.com/jquery-2.2.4.min',
    'jquery-typeahead': '../vendor/jquery.typeahead.min'
  }
});

// Load the main app module to start the app
requirejs(['app/main']);
