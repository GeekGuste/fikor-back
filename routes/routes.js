// Import express router
let Router = require('express').Router();
// Set default API response

/**
 * @openapi
 * /:
 *   get:
 *     description: Fikor Api root!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
Router.get('/', function(req, res) {
    res.json({
        status: 'WORKING',
        message: 'This is the /api/ route!'
    });
});

/**
 * @openapi
 * /hello:
 *   get:
 *     description: Page saying hello
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
Router.get('/hello', function(req, res, next) {
    res.send('Hello world');
});

// Export API routes
module.exports = Router;