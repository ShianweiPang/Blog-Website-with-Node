const express = require('express');
const blogController = require('../controllers/blogControlller')

// mini app
const router = express.Router();


// blog routes
router.get('/', blogController.blog_index);
// handling post request
router.post('/', blogController.blog_create_post)
// handling get request
router.get('/create', blogController.blog_create_get)
// handle route parameter
router.get('/:id', blogController.blog_details)
// handle route parameter for delete
router.delete('/:id', blogController.blog_delete)

module.exports = router;