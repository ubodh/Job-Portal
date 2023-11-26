const express = require('express');
const router = express.Router();
const homeController = require('../controller/homecontroller');
router.get('/',homeController.home)
router.get('/jobs',homeController.jobs)
router.get('/login',homeController.login)
router.get('/postjob',homeController.postjob)
router.get('/job/1',homeController.job1)
router.get('/job/2',homeController.job2)
router.get('/job/3',homeController.job3)
console.log('router is loaded')
module.exports = router;