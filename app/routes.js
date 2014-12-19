/**
 * Draw routes.
 */
exports = module.exports = function(IoC) {

  this.get('/', IoC.create('handlers/compose'));
  this.post('/send', IoC.create('handlers/send'));
  
};

/**
 * DI annotations.
 */
exports['@require'] = [ '$container' ];
