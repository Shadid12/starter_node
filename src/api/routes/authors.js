const express = require('express');
const router = express.Router();

/**
 * GET request to /authors
 */
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'All Authors were fetched'
    });
});

/**
 * GET request to /authors/:id
 */
router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Author with id was fetch'
    });
});

module.exports = router;