/**
 * Module dependencies.
 */
var bodyParser = require('body-parser')
  , errorHandler = require('errorhandler');


exports = module.exports = function(logger) {
  
  function enqueue(req, res, next) {
    console.log('TODO: enqueue message');
  }
  
  function respond(req, res, next) {
    res.redirect('/');
  }

  
  /**
   * POST /add
   *
   * CLI:
   *
   *     $ curl -X POST -H "Content-Type: application/json" --data "{\"operands\":[1,2]}" http://127.0.0.1:8080/add
   */
  return [ bodyParser.urlencoded(),
           enqueue,
           respond,
           errorHandler() ];
  
}

/**
 * Component annotations.
 */
exports['@require'] = [ 'logger' ];
