exports = module.exports = function() {
  
  function respond(req, res, next) {
    res.render('compose');
  }

  
  /**
   * GET /
   *
   * CLI:
   *
   *     $ curl http://127.0.0.1:8080/
   */
  return [ respond ];
  
}

/**
 * Component annotations.
 */
exports['@require'] = [];
