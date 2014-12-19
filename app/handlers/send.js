/**
 * Module dependencies.
 */
var bodyParser = require('body-parser')
  , errorHandler = require('errorhandler');


exports = module.exports = function(mq, logger) {
  
  function enqueue(req, res, next) {
    var sms = {
      to: req.body.to,
      message: req.body.message
    }
    
    logger.debug('Enqueueing SMS message');
    mq.enqueue('message/sms', sms, function(err) {
      if (err) { return next(err); }
      next();
    });
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
exports['@require'] = [ 'mq/adapter', 'logger' ];
