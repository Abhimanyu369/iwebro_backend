const express = require('express');
const routes = express.Router();
const company = require('../models/company');
const controller = require('../controller/apiController');
const upload = require('../config/multer');
const nodemailer = require('nodemailer');
const benefit = require('../models/benefit');
const review = require('../models/review');
const client = require('../models/client');
const testimonial = require('../models/testimonial');
const blog = require('../models/blog');
const dev = require('../models/dev_details');
const event = require('../models/event');
const skill = require('../models/skill');
const developer = require('../models/developer');
const team1 = require('../models/team1');
const team2 = require('../models/team2');
const apply_developer = require('../models/apply_developer');
const process_img = require('../models/process_img');
const project = require('../models/project');
const service = require('../models/service');
const remote_hiring = require('../models/remote_hiring');
const access_project = require('../models/access_project');

const profilesRouter = require('./profiles');
const jobsRouter = require('./jobs');
const userRoutes = require('./userRoutes');
const requirementsRouter = require('./requirements');
const analyticsRouter = require('./analytics');
const queryRouter = require('./query');
const hiringRouter = require('./hiring');


routes.get('/fetch_data', controller.fetchData);
routes.get('/fetch_data2', controller.fetchData2);
routes.get('/fetch_data3', controller.fetchData3);
routes.get('/fetch_data4/:id', controller.fetchData4);
routes.get('/fetch_data5/:id', controller.fetchData5);
routes.get('/fetch_data6/:id', controller.fetchData6);


routes.get('/view_review', controller.ViewReview);
routes.get('/view_benefit', controller.ViewBenefit);
routes.get('/view_Service', controller.ViewService);
routes.get('/view_access_project', controller.ViewAccessProject);
routes.get('/view_remote_hiring', controller.ViewRemoteHiring);
routes.get('/view_project', controller.ViewProject);
routes.get('/view_client', controller.ViewClient);
routes.get('/view_testimonial', controller.ViewTestimonial);
routes.get('/view_job', controller.ViewJobs);
routes.get('/view_job_name/:id', controller.ViewJobsName);
routes.get('/view_blog', controller.ViewBlogs);
routes.get('/view_event', controller.ViewEvents);
routes.get('/view_developer_detail', controller.ViewDevDetails);
routes.get('/view_developer_job/:id', controller.ViewDevJob);
routes.get('/view_developer_one_detail', controller.ViewDevDetail);
routes.get('/view_skill', controller.ViewSkill);
routes.get('/view_marquee', controller.ViewMarquee);
routes.get('/view_process', controller.ViewProcess);
routes.get('/view_process_img', controller.ViewProcessImg);
routes.get('/view_team_content', controller.ViewTeamContent);
routes.get('/view_team1', controller.ViewTeam1);
routes.get('/view_team2', controller.ViewTeam2);


routes.post('/view_job_admin', controller.ViewJobsAdmin);
routes.post('/view_developer', controller.ViewDeveloper);
routes.post('/view_apply_developer', controller.ViewApplyDeveloper);
routes.post('/view_company', controller.ViewCompany);
routes.post('/view_hire', controller.ViewHire);


routes.delete('/deleteBenefit/:id', controller.DeleteBenefit);
routes.delete('/deleteService/:id', controller.DeleteService);
routes.delete('/deleteAccessProject/:id', controller.DeleteAccessProject);
routes.delete('/deleteRemoteHiring/:id', controller.DeleteRemoteHiring);
routes.delete('/deleteProject/:id', controller.DeleteProject);
routes.delete('/deleteClient/:id', controller.DeleteClient);
routes.delete('/deleteReview/:id', controller.DeleteReview);
routes.delete('/deleteTestimonial/:id', controller.DeleteTestimonial);
routes.delete('/deleteJob/:id', controller.DeleteJob);
routes.delete('/deleteDeveloper/:id', controller.DeleteDeveloper);
routes.delete('/deleteApplyDeveloper/:id', controller.DeleteApplyDeveloper);
routes.delete('/deleteCompany/:id', controller.DeleteCompany);
routes.delete('/deleteBlog/:id', controller.DeleteBlog);
routes.delete('/deleteEvent/:id', controller.DeleteEvent);
routes.delete('/deleteDev/:id', controller.DeleteDev);
routes.delete('/deleteHire/:id', controller.DeleteHire);
routes.delete('/deleteSkill/:id', controller.DeleteSkill);
routes.delete('/deleteMarquee/:id', controller.DeleteMarquee);
routes.delete('/deleteProcess/:id', controller.DeleteProcess);
routes.delete('/deleteTeamContent/:id', controller.DeleteTeamContent);
routes.delete('/deleteTeam1/:id', controller.DeleteTeam1);
routes.delete('/deleteTeam2/:id', controller.DeleteTeam2);


routes.post('/add_developer', developer.upload, controller.AddDeveloper);
routes.post('/add_talent_developer', developer.upload, controller.AddTalentDeveloper);
routes.post('/add_apply_developer', apply_developer.upload, controller.AddApplyDeveloper);
routes.post('/addReview', review.upload, controller.AddReviews);
routes.post('/addBenefit', benefit.upload, controller.AddBenefits);
routes.post('/addService', service.upload, controller.AddServices);
routes.post('/addRemoteHiring', remote_hiring.upload, controller.AddRemoteHirings);
routes.post('/addAccessProject', access_project.upload, controller.AddAccessProjects);
routes.post('/addProject', project.upload, controller.AddProjects);
routes.post('/addClient', client.upload, controller.AddClients);
routes.post('/addTestimonial', testimonial.upload, controller.AddTestimonials);
routes.post('/addJobs', controller.AddJobs);
routes.post('/addTalentJobs', controller.AddTalentJobs);
routes.post('/addBlog', blog.upload, controller.AddBlogs);
routes.post('/addProcessImg', process_img.upload, controller.AddProcessImg);
routes.post('/addEvent', event.upload, controller.AddEvents);
routes.post('/addSkill', skill.upload, controller.AddSkills);
routes.post('/addTeam1', team1.upload, controller.AddTeam1);
routes.post('/addTeam2', team2.upload, controller.AddTeam2);
routes.post('/addDev', dev.upload, controller.AddDevs);
routes.post('/addMarquee', controller.AddMarquee);
routes.post('/addProcess', controller.AddProcess);
routes.post('/addTeamContent', controller.AddTeamContent);
routes.post('/start_hire', controller.AddHire);


routes.put('/editJob/:id', controller.EditJob);
routes.put('/editHire/:id', controller.EditHire);
routes.put('/editAdmin/:id', controller.EditAdmin);
routes.put('/editMarquee/:id', controller.EditMarquee);
routes.put('/editProcess/:id', controller.EditProcess);
routes.put('/editdev/:id', dev.upload, controller.EditDev);
routes.put('/editBlog/:id', blog.upload, controller.EditBlog);
routes.put('/editCompany/:id', upload, controller.EditCompany);
routes.put('/editTeamContent/:id', controller.EditTeamContent);
routes.put('/editEvent/:id', event.upload, controller.EditEvent);
routes.put('/editSkill/:id', skill.upload, controller.EditSkill);
routes.put('/editTeam1/:id', team1.upload, controller.EditTeam1);
routes.put('/editTeam2/:id', team2.upload, controller.EditTeam2);
routes.put('/editClient/:id', client.upload, controller.EditClient);
routes.put('/editReview/:id', review.upload, controller.EditReview);
routes.put('/editBenefit/:id', benefit.upload, controller.EditBenefit);
routes.put('/editService/:id', service.upload, controller.EditService);
routes.put('/editAccessProject/:id', access_project.upload, controller.EditAccessProject);
routes.put('/editRemoteHiring/:id', remote_hiring.upload, controller.EditRemoteHiring);
routes.put('/editProject/:id', project.upload, controller.EditProject);
routes.put('/editDeveloper/:id', developer.upload, controller.EditDeveloper);
routes.put('/editApplyDeveloper/:id', apply_developer.upload, controller.EditApplyDeveloper);
routes.put('/editTestimonial/:id', testimonial.upload, controller.EditTestimonial);


routes.get('/singleJob/:id', controller.SingleJob);
routes.get('/singleBenefit/:id', controller.SingleBenefit);
routes.get('/singleService/:id', controller.SingleService);
routes.get('/singleAccessProject/:id', controller.SingleAccessProject);
routes.get('/singleRemoteHiring/:id', controller.SingleRemoteHiring);
routes.get('/singleProject/:id', controller.SingleProject);
routes.get('/singleClient/:id', controller.SingleClient);
routes.get('/singleReview/:id', controller.SingleReview);
routes.get('/singleTestimonial/:id', controller.SingleTestimonial);
routes.get('/singleDeveloper/:id', controller.SingleDeveloper);
routes.get('/singleApplyDeveloper/:id', controller.SingleApplyDeveloper);
routes.get('/singleCompany/:id', controller.SingleCompany);
routes.get('/singleBlog/:id', controller.SingleBlog);
routes.get('/singleEvent/:id', controller.SingleEvent);
routes.get('/singleSkill/:id', controller.SingleSkill);
routes.get('/singleMarquee/:id', controller.SingleMarquee);
routes.get('/singleProcess/:id', controller.SingleProcess);
routes.get('/singleTeamContent/:id', controller.SingleTeamContent);
routes.get('/singleTeam1/:id', controller.SingleTeam1);
routes.get('/singleTeam2/:id', controller.SingleTeam2);

routes.get('/view_requirements/:id', controller.ViewRequirements);
routes.get('/view_developers/:id', controller.ViewDevelopers);


routes.post('/login_talent', controller.LoginProcess);
routes.post('/login', controller.Login);
routes.post('/register', controller.Register);


routes.route('/add_company').post(upload, controller.AddCompany);

routes.use('/profiles', profilesRouter);
routes.use('/jobs', jobsRouter);
routes.use('/users', userRoutes);
routes.use('/requirements', requirementsRouter);
routes.use('/analytics', analyticsRouter);
routes.use('/queries', queryRouter);
routes.use('/hiring', hiringRouter);

module.exports = routes;