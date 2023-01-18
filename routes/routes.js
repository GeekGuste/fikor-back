// Import express router
let Router = require('express').Router();
// Set default API response

/**
 * @openapi
 * /api/:
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
 * /api/index:
 *   get:
 *     description: Page for test
 *     responses:
 *       200:
 *         description: Returns a beautiful congrat.
 */
Router.get('/index', function(req, res, next) {
    res.send('Welcome to Fikor project. A 25 millions $ project with 1 billard of users.');
});

// Export API routes
module.exports = Router;