const nodemailer = require('nodemailer');
const benefit = require('../models/benefit');
const review = require('../models/review');
const client = require('../models/client');
const blog = require('../models/blog');
const testimonial = require('../models/testimonial');
const dev_details = require('../models/dev_details');
const developer = require('../models/developer');
const hire = require('../models/hire');
const event = require('../models/event');
const job = require('../models/job');
const skill = require('../models/skill');
const marquee = require('../models/marquee');
const process_view = require('../models/process');
const process_img = require('../models/process_img');
const company = require('../models/company');
const dev = require('../models/dev_details');
const admin = require('../models/admin');
const team_content = require('../models/team_content');
const team1 = require('../models/team1');
const project = require('../models/project');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const { Model } = require('mongoose');
const { MongoDBCollectionNamespace } = require('mongodb');
const team2 = require('../models/team2');
const apply_developer = require('../models/apply_developer');
const service = require('../models/service');
const remote_hiring = require('../models/remote_hiring');
const access_project = require('../models/access_project');
const dotenv = require('dotenv');

dotenv.config();

module.exports.Register = async (req, res) => {
  try {
    let fData = await admin.findOne({ email: req.body.email });
    if (fData) {
      res.status(400).json({ message: 'User already register.' });
      return false;
    }
    if (req.body.password === req.body.cpassword) {
      let data = await admin.create(req.body);
      if (data) {
        res.status(200).json({ message: 'User successfully register.' });
      } else {
        res.status(400).json({ message: 'something wrong.' });
      }
    } else {
      res.status(400).json({ message: 'password not match.' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewReview = async (req, res) => {
  try {
    let data = await review.find({}).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewClient = async (req, res) => {
  try {
    let data = await client.find({}).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewBenefit = async (req, res) => {
  try {
    let data = await benefit.find({}).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewAccessProject = async (req, res) => {
  try {
    let data = await access_project.find({}).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewRemoteHiring = async (req, res) => {
  try {
    let data = await remote_hiring.find({}).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewService = async (req, res) => {
  try {
    let data = await service.find({}).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewProject = async (req, res) => {
  try {
    let data = await project.find({}).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewTestimonial = async (req, res) => {
  try {
    let data = await testimonial.find({}).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewReview = async (req, res) => {
  try {
    let data = await review.find({}).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewJobs = async (req, res) => {
  try {
    if (req.query.limit) {
      let data = await job.find({ status: true }).limit(req.query.limit).sort({
        _id: -1,
      });
      if (data) {
        res.status(200).json({
          data: data,
        });
      } else {
        res.status(400).json({
          data: 'Data not Found.',
        });
      }
    } else {
      let data = await job.find({ status: true }).sort({
        _id: -1,
      });
      if (data) {
        res.status(200).json({
          data: data,
        });
      } else {
        res.status(400).json({
          data: 'Data not Found.',
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewJobsAdmin = async (req, res) => {
  try {
    let per_page = 5;
    let page = 1;
    let search = '';
    if (req.body.page) {
      page = JSON.parse(req.body.page);
    }
    if (req.body.limit) {
      per_page = JSON.parse(req.body.limit);
    }
    if (req.body.search) {
      search = req.body.search;
    }
    let data = await job
      .find({
        $or: [{ jobName: { $regex: '.*' + search + '.*' } }],
      })
      .sort({
        _id: -1,
      })
      .skip((page - 1) * per_page)
      .populate('companyId')
      .limit(per_page)
      .exec();

    let total = await job
      .find({
        $or: [{ jobName: { $regex: '.*' + search + '.*' } }],
      })
      .countDocuments();

    if (data) {
      res.status(200).json({
        data: data,
        cur: page,
        next: page + 1,
        prev: page - 1,
        search: search,
        totalData: total,
        total: Math.ceil(total / per_page),
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewJobsName = async (req, res) => {
  try {
    let data = await job.findById(req.params.id).populate('companyId').exec();
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewBlogs = async (req, res) => {
  try {
    if (req.query.limit) {
      let data = await blog.find({}).limit(req.query.limit).sort({
        _id: -1,
      });
      if (data) {
        res.status(200).json({
          data: data,
        });
      } else {
        res.status(400).json({
          data: 'Data not Found.',
        });
      }
    } else {
      let data = await blog.find({}).sort({
        _id: -1,
      });
      if (data) {
        res.status(200).json({
          data: data,
        });
      } else {
        res.status(400).json({
          data: 'Data not Found.',
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewEvents = async (req, res) => {
  try {
    let data = await event.find({}).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewDevDetails = async (req, res) => {
  try {
    let data = await dev_details.find({}).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewDevJob = async (req, res) => {
  try {
    let data = await apply_developer.find({ jobId: req.params.id }).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewDevDetail = async (req, res) => {
  try {
    let data = await dev_details.findById(req.query.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewSkill = async (req, res) => {
  try {
    let data = await skill.find({}).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewTeam1 = async (req, res) => {
  try {
    let data = await team1.find({}).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewTeam2 = async (req, res) => {
  try {
    let data = await team2.find({}).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewHire = async (req, res) => {
  try {
    let per_page = 5;
    let page = 1;
    let search = '';
    if (req.body.page) {
      page = JSON.parse(req.body.page);
    }
    if (req.body.limit) {
      per_page = JSON.parse(req.body.limit);
    }
    if (req.body.search) {
      search = req.body.search;
    }
    let data = await hire
      .find({
        $or: [{ company_name: { $regex: '.*' + search + '.*' } }],
      })
      .sort({
        _id: -1,
      })
      .skip((page - 1) * per_page)
      .limit(per_page)
      .exec();

    let total = await hire
      .find({
        $or: [{ company_name: { $regex: '.*' + search + '.*' } }],
      })
      .countDocuments();

    if (data) {
      res.status(200).json({
        data: data,
        cur: page,
        next: page + 1,
        prev: page - 1,
        search: search,
        totalData: total,
        total: Math.ceil(total / per_page),
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewDeveloper = async (req, res) => {
  try {
    let per_page = 5;
    let page = 1;
    let search = '';
    if (req.body.per_page) {
      per_page = req.body.per_page;
    }
    if (req.body.page) {
      page = req.body.page;
    }
    if (req.body.search) {
      search = req.body.search;
    }

    let data = await developer
      .find({
        $or: [{ full_name: { $regex: '.*' + search + '.*' } }],
      })
      .sort({ _id: -1 })
      .skip((page - 1) * per_page)
      .populate('companyId')
      .limit(per_page)
      .exec();

    let total = await developer
      .find({
        $or: [{ full_name: { $regex: '.*' + search + '.*' } }],
      })
      .countDocuments();

    if (data) {
      res.status(200).json({
        data: data,
        cur: page,
        next: page + 1,
        prev: page - 1,
        search: search,
        totalData: total,
        total: Math.ceil(total / per_page),
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewApplyDeveloper = async (req, res) => {
  try {
    let per_page = 5;
    let page = 1;
    let search = '';
    if (req.body.per_page) {
      per_page = req.body.per_page;
    }
    if (req.body.page) {
      page = req.body.page;
    }
    if (req.body.search) {
      search = req.body.search;
    }

    let data = await apply_developer
      .find({
        $or: [{ full_name: { $regex: '.*' + search + '.*' } }],
      })
      .sort({ _id: -1 })
      .skip((page - 1) * per_page)
      .populate('jobId')
      .limit(per_page)
      .exec();

    let total = await apply_developer
      .find({
        $or: [{ full_name: { $regex: '.*' + search + '.*' } }],
      })
      .countDocuments();

    if (data) {
      res.status(200).json({
        data: data,
        cur: page,
        next: page + 1,
        prev: page - 1,
        search: search,
        totalData: total,
        total: Math.ceil(total / per_page),
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewCompany = async (req, res) => {
  try {
    let per_page = 2;
    let page = 1;
    let search = '';
    if (req.body.page) {
      page = JSON.parse(req.body.page);
    }
    if (req.body.limit) {
      per_page = JSON.parse(req.body.limit);
    }
    if (req.body.search) {
      search = req.body.search;
    }
    let data = await company
      .find({
        $or: [{ company_name: { $regex: '.*' + search + '.*' } }],
      })
      .sort({
        _id: -1,
      })
      .skip((page - 1) * per_page)
      .limit(per_page)
      .exec();

    let total = await company
      .find({
        $or: [{ company_name: { $regex: '.*' + search + '.*' } }],
      })
      .countDocuments();

    if (data) {
      res.status(200).json({
        data: data,
        cur: page,
        next: page + 1,
        prev: page - 1,
        search: search,
        totalData: total,
        total: Math.ceil(total / per_page),
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewMarquee = async (req, res) => {
  try {
    let data = await marquee.find({}).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewProcess = async (req, res) => {
  try {
    let data = await process_view.find({}).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewProcessImg = async (req, res) => {
  try {
    let data = await process_img.find({});
    if (data) {
      res.status(200).json({
        data: data[0],
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewTeamContent = async (req, res) => {
  try {
    let data = await team_content.find({}).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddDeveloper = async (req, res) => {
  try {
    req.body.cv = developer.path + '/' + req.file.filename;
    req.body.full_name = req.body.first_name + ' ' + req.body.last_name;
    let data = await developer.create(req.body);
    if (data) {
      res.status(200).json({
        data: 'Data Inserted.',
      });
    } else {
      res.status(400).json({
        data: 'Data not Insert.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddTalentDeveloper = async (req, res) => {
  try {
    req.body.cv = developer.path + '/' + req.file.filename;
    req.body.full_name = req.body.first_name + ' ' + req.body.last_name;
    let data = await developer.create(req.body);
    if (data) {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'iwebro123@gmail.com',
          pass: 'rjirreplyflprufa',
        },
      });
      await transporter.sendMail({
        from: 'iwebro123@gmail.com',
        to: req.body.talent_email,
        subject: `Hello ${req.body.company_name} ✔`,
        html: `<h2>Welcome to Iwebro. Thank You For Visiting Iwebro.</h2><b>Add Developer.</b>`,
      });
      res.status(200).json({
        data: 'Data Inserted.',
      });
    } else {
      res.status(400).json({
        data: 'Data not Insert.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddApplyDeveloper = async (req, res) => {
  try {
    req.body.cv = apply_developer.path + '/' + req.file.filename;
    req.body.full_name = req.body.first_name + ' ' + req.body.last_name;
    let data = await apply_developer.create(req.body);
    if (data) {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'iwebro123@gmail.com',
          pass: 'rjirreplyflprufa',
        },
      });
      await transporter.sendMail({
        from: 'iwebro123@gmail.com',
        to: req.body.email,
        subject: `Hello ${req.body.full_name} ✔`,
        html: `<h2>Welcome to Iwebro. Thank You For Visiting Iwebro.</h2><b> You have applied for ${req.body.jobName}.</b>`,
      });
      res.status(200).json({
        data: 'Data Inserted.',
      });
    } else {
      res.status(400).json({
        data: 'Data not Insert.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddMarquee = async (req, res) => {
  try {
    let data = await marquee.create(req.body);
    if (data) {
      res.status(200).json({
        data: 'Data Inserted.',
      });
    } else {
      res.status(400).json({
        data: 'Data not Insert.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddProcess = async (req, res) => {
  try {
    let data = await process_view.create(req.body);
    if (data) {
      res.status(200).json({
        data: 'Data Inserted.',
      });
    } else {
      res.status(400).json({
        data: 'Data not Insert.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddTeamContent = async (req, res) => {
  try {
    let data = await team_content.create(req.body);
    if (data) {
      res.status(200).json({
        data: 'Data Inserted.',
      });
    } else {
      res.status(400).json({
        data: 'Data not Insert.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddHire = async (req, res) => {
  try {
    let data = await hire.create(req.body);
    if (data) {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'iwebro123@gmail.com',
          pass: 'rjirreplyflprufa',
        },
      });
      await transporter.sendMail({
        from: 'iwebro123@gmail.com',
        to: req.body.email,
        subject: `Hello ${req.body.company_name} ✔`,
        html: `<h2>Welcome to Iwebro. Thank You For Visiting Iwebro.</h2><b> You have successfully applied the hire form.</b>`,
      });
      res.status(200).json({
        data: 'Data Inserted.',
      });
    } else {
      res.status(400).json({
        data: 'Data not Insert.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddJobs = async (req, res) => {
  try {
    let data = await job.create(req.body);
    if (data) {
      res.status(200).json({
        data: 'Data Inserted.',
      });
    } else {
      res.status(400).json({
        data: 'Data not Insert.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddTalentJobs = async (req, res) => {
  try {
    let data = await job.create(req.body);
    if (data) {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'iwebro123@gmail.com',
          pass: 'rjirreplyflprufa',
        },
      });
      await transporter.sendMail({
        from: 'iwebro123@gmail.com',
        to: req.body.talent_email,
        subject: `Hello ${req.body.company_name} ✔`,
        html: `<h2>Welcome to Iwebro. Thank You For Visiting Iwebro.</h2><b>Add Job Requirement.</b>`,
      });
      res.status(200).json({
        data: 'Data Inserted.',
      });
    } else {
      res.status(400).json({
        data: 'Data not Insert.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddBenefits = async (req, res) => {
  try {
    if (req.file) {
      req.body.img = benefit.path + '/' + req.file.filename;
      let data = await benefit.create(req.body);
      if (data) {
        res.status(200).json({
          data: 'Data Inserted.',
        });
      } else {
        res.status(400).json({
          data: 'Data not Insert.',
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddServices = async (req, res) => {
  try {
    if (req.file) {
      req.body.img = service.path + '/' + req.file.filename;
      let data = await service.create(req.body);
      if (data) {
        res.status(200).json({
          data: 'Data Inserted.',
        });
      } else {
        res.status(400).json({
          data: 'Data not Insert.',
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddAccessProjects = async (req, res) => {
  try {
    if (req.file) {
      req.body.img = access_project.path + '/' + req.file.filename;
      let data = await access_project.create(req.body);
      if (data) {
        res.status(200).json({
          data: 'Data Inserted.',
        });
      } else {
        res.status(400).json({
          data: 'Data not Insert.',
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddRemoteHirings = async (req, res) => {
  try {
    if (req.file) {
      req.body.img = remote_hiring.path + '/' + req.file.filename;
      let data = await remote_hiring.create(req.body);
      if (data) {
        res.status(200).json({
          data: 'Data Inserted.',
        });
      } else {
        res.status(400).json({
          data: 'Data not Insert.',
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddProjects = async (req, res) => {
  try {
    if (req.file) {
      req.body.img = project.path + '/' + req.file.filename;
      let data = await project.create(req.body);
      if (data) {
        res.status(200).json({
          data: 'Data Inserted.',
        });
      } else {
        res.status(400).json({
          data: 'Data not Insert.',
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddProcessImg = async (req, res) => {
  try {
    if (req.file) {
      let fdata = await process_img.find({});
      if (fdata.length > 0) {
        fs.unlinkSync(path.join(__dirname, '..', fdata[0].img));
        await process_img.findByIdAndDelete(fdata[0]._id);
      }
      req.body.img = process_img.path + '/' + req.file.filename;
      let data = await process_img.create(req.body);
      if (data) {
        res.status(200).json({
          data: 'Data Inserted.',
        });
      } else {
        res.status(400).json({
          data: 'Data not Insert.',
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddBlogs = async (req, res) => {
  try {
    if (req.file) {
      req.body.img = blog.path + '/' + req.file.filename;
      let data = await blog.create(req.body);
      if (data) {
        res.status(200).json({
          data: 'Data Inserted.',
        });
      } else {
        res.status(400).json({
          data: 'Data not Insert.',
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddClients = async (req, res) => {
  try {
    if (req.file) {
      req.body.img = client.path + '/' + req.file.filename;
      let data = await client.create(req.body);
      if (data) {
        res.status(200).json({
          data: 'Data Inserted.',
        });
      } else {
        res.status(400).json({
          data: 'Data not Insert.',
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddCompany = async (req, res) => {
  try {
    let password = Math.floor(100000 + Math.random() * 900000);
    try {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GOOGLE_EMAIL_SERVICE_USER,
          pass: process.env.GOOGLE_EMAIL_SERVICE_PASS,
        },
      });
      await transporter.sendMail({
        from: process.env.GOOGLE_EMAIL_SERVICE_USER,
        to: req.body.email,
        subject: `Hello ${req.body.company_name} ✔`,
        html: `<h2>Welcome to Iwebro. Thank You For Visiting Iwebro.</h2><b> Please use the below password and login for talent panel.</b><h1>${password}</h1>`,
      });
    } catch (error) {
      console.log('Email trigger error: ' + error);
    }
    const company_name = req.body.company_name;
    const email = req.body.email;
    const phone = req.body.phone;
    const desc = req.body.desc;
    const address = req.body.address;
    const location = req.body.location;
    const photo = req.files.photo[0].path
      .replaceAll('\\', '/')
      .split('src/assets/')[1];
    const pdf = req.files.pdf[0].path
      .replaceAll('\\', '/')
      .split('src/assets/')[1];
    const newUserData = {
      company_name,
      email,
      password,
      phone,
      desc,
      address,
      location,
      photo,
      pdf,
    };
    let data = await company.create(newUserData);
    if (data) {
      res.status(200).json(data);
      return;
    }
    res.status(400).json('Some Thing Wrong');
  } catch (error) {
    res.status(500).json(`Error: ${error}`);
  }
};

module.exports.AddReviews = async (req, res) => {
  try {
    if (req.file) {
      req.body.img = review.path + '/' + req.file.filename;
      let data = await review.create(req.body);
      if (data) {
        res.status(200).json({
          data: 'Data Inserted.',
        });
      } else {
        res.status(400).json({
          data: 'Data not Insert.',
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports.AddTestimonials = async (req, res) => {
  try {
    if (req.file) {
      req.body.img = testimonial.path + '/' + req.file.filename;
      let data = await testimonial.create(req.body);
      if (data) {
        res.status(200).json({
          data: 'Data Inserted.',
        });
      } else {
        res.status(400).json({
          data: 'Data not Insert.',
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports.AddEvents = async (req, res) => {
  try {
    if (req.file) {
      req.body.img = event.path + '/' + req.file.filename;
      let data = await event.create(req.body);
      if (data) {
        res.status(200).json({
          data: 'Data Inserted.',
        });
      } else {
        res.status(400).json({
          data: 'Data not Insert.',
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports.AddDevs = async (req, res) => {
  try {
    if (req.file) {
      req.body.img = dev_details.path + '/' + req.file.filename;
      let data = await dev_details.create(req.body);
      if (data) {
        res.status(200).json({
          data: 'Data Inserted.',
        });
      } else {
        res.status(400).json({
          data: 'Data not Insert.',
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports.AddSkills = async (req, res) => {
  try {
    if (req.file) {
      req.body.img = skill.path + '/' + req.file.filename;
      let data = await skill.create(req.body);
      if (data) {
        res.status(200).json({
          data: 'Data Inserted.',
        });
      } else {
        res.status(400).json({
          data: 'Data not Insert.',
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddTeam1 = async (req, res) => {
  try {
    if (req.file) {
      req.body.img = team1.path + '/' + req.file.filename;
      let data = await team1.create(req.body);
      if (data) {
        res.status(200).json({
          data: 'Data Inserted.',
        });
      } else {
        res.status(400).json({
          data: 'Data not Insert.',
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.AddTeam2 = async (req, res) => {
  try {
    if (req.file) {
      req.body.img = team2.path + '/' + req.file.filename;
      let data = await team2.create(req.body);
      if (data) {
        res.status(200).json({
          data: 'Data Inserted.',
        });
      } else {
        res.status(400).json({
          data: 'Data not Insert.',
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.Login = async (req, res) => {
  try {
    let data = await admin.findOne({ email: req.body.email });
    if (data) {
      if (data.password === req.body.password) {
        let token = jwt.sign({ data }, 'secret', { expiresIn: '1d' });
        res.status(200).json({ token });
      } else {
        res.status(400).json({ message: 'Wrong Password.' });
      }
    } else {
      res.status(400).json({ message: 'Admin Not Found.' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleReview = async (req, res) => {
  try {
    let data = await review.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleClient = async (req, res) => {
  try {
    let data = await client.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleBenefit = async (req, res) => {
  try {
    let data = await benefit.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleRemoteHiring = async (req, res) => {
  try {
    let data = await remote_hiring.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleAccessProject = async (req, res) => {
  try {
    let data = await access_project.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleService = async (req, res) => {
  try {
    let data = await service.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleProject = async (req, res) => {
  try {
    let data = await project.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleTestimonial = async (req, res) => {
  try {
    let data = await testimonial.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleReview = async (req, res) => {
  try {
    let data = await review.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleJob = async (req, res) => {
  try {
    let data = await job.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleBlog = async (req, res) => {
  try {
    let data = await blog.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleEvent = async (req, res) => {
  try {
    let data = await event.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleSkill = async (req, res) => {
  try {
    let data = await skill.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleMarquee = async (req, res) => {
  try {
    let data = await marquee.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleDeveloper = async (req, res) => {
  try {
    let data = await developer.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleApplyDeveloper = async (req, res) => {
  try {
    let data = await apply_developer.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleCompany = async (req, res) => {
  try {
    let data = await company.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewRequirements = async (req, res) => {
  try {
    let data = await job.find({ companyId: req.params.id }).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.ViewDevelopers = async (req, res) => {
  try {
    let data = await developer.find({ companyId: req.params.id }).sort({
      _id: -1,
    });
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleTeam1 = async (req, res) => {
  try {
    let data = await team1.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleTeam2 = async (req, res) => {
  try {
    let data = await team2.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleProcess = async (req, res) => {
  try {
    let data = await process_view.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.SingleTeamContent = async (req, res) => {
  try {
    let data = await team_content.findById(req.params.id);
    if (data) {
      res.status(200).json({
        data: data,
      });
    } else {
      res.status(400).json({
        data: 'Data not Found.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteBenefit = async (req, res) => {
  try {
    let data = await benefit.findById(req.params.id);
    fs.unlinkSync(path.join(__dirname, '..', data.img));
    await benefit.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      data: 'Succefully deleted.',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteService = async (req, res) => {
  try {
    let data = await service.findById(req.params.id);
    fs.unlinkSync(path.join(__dirname, '..', data.img));
    await service.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      data: 'Succefully deleted.',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteAccessProject = async (req, res) => {
  try {
    let data = await access_project.findById(req.params.id);
    fs.unlinkSync(path.join(__dirname, '..', data.img));
    await access_project.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      data: 'Succefully deleted.',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteRemoteHiring = async (req, res) => {
  try {
    let data = await remote_hiring.findById(req.params.id);
    fs.unlinkSync(path.join(__dirname, '..', data.img));
    await remote_hiring.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      data: 'Succefully deleted.',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteProject = async (req, res) => {
  try {
    let data = await project.findById(req.params.id);
    fs.unlinkSync(path.join(__dirname, '..', data.img));
    await project.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      data: 'Succefully deleted.',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteEvent = async (req, res) => {
  try {
    let data = await event.findById(req.params.id);
    fs.unlinkSync(path.join(__dirname, '..', data.img));
    await event.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      data: 'Succefully deleted.',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteBlog = async (req, res) => {
  try {
    let data = await blog.findById(req.params.id);
    fs.unlinkSync(path.join(__dirname, '..', data.img));
    await blog.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      data: 'Succefully deleted.',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteClient = async (req, res) => {
  try {
    let data = await client.findById(req.params.id);
    fs.unlinkSync(path.join(__dirname, '..', data.img));
    await client.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      data: 'Succefully deleted.',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteReview = async (req, res) => {
  try {
    let data = await review.findById(req.params.id);
    fs.unlinkSync(path.join(__dirname, '..', data.img));
    await review.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      data: 'Succefully deleted.',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteTestimonial = async (req, res) => {
  try {
    let data = await testimonial.findById(req.params.id);
    fs.unlinkSync(path.join(__dirname, '..', data.img));
    await testimonial.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      data: 'Succefully deleted.',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteSkill = async (req, res) => {
  try {
    let fdata = await skill.findById(req.params.id);
    fs.unlinkSync(path.join(__dirname, '..', fdata.img));
    let data = await skill.findByIdAndDelete(req.params.id);
    if (data) {
      return res.status(200).json({
        data: 'Succefully deleted.',
      });
    } else {
      return res.status(200).json({
        data: 'Succefully deleted.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteCompany = async (req, res) => {
  try {
    let fdata = await company.findById(req.params.id);
    fs.unlinkSync(path.join(__dirname, '..', fdata.photo));
    fs.unlinkSync(path.join(__dirname, '..', fdata.pdf));
    let data = await company.findByIdAndDelete(req.params.id);
    if (data) {
      return res.status(200).json({
        data: 'Succefully deleted.',
      });
    } else {
      return res.status(400).json({
        data: 'Some thing wrong.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteDev = async (req, res) => {
  try {
    let fdata = await dev.findById(req.params.id);
    fs.unlinkSync(path.join(__dirname, '..', fdata.img));
    let data = await dev.findByIdAndDelete(req.params.id);
    if (data) {
      return res.status(200).json({
        data: 'Succefully deleted.',
      });
    } else {
      return res.status(400).json({
        data: 'Some thing wrong.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteTeam1 = async (req, res) => {
  try {
    let fdata = await team1.findById(req.params.id);
    fs.unlinkSync(path.join(__dirname, '..', fdata.img));
    let data = await team1.findByIdAndDelete(req.params.id);
    if (data) {
      return res.status(200).json({
        data: 'Succefully deleted.',
      });
    } else {
      return res.status(400).json({
        data: 'Some thing wrong.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteTeam2 = async (req, res) => {
  try {
    let fdata = await team2.findById(req.params.id);
    fs.unlinkSync(path.join(__dirname, '..', fdata.img));
    let data = await team2.findByIdAndDelete(req.params.id);
    if (data) {
      return res.status(200).json({
        data: 'Succefully deleted.',
      });
    } else {
      return res.status(400).json({
        data: 'Some thing wrong.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteJob = async (req, res) => {
  try {
    let data = await job.findByIdAndDelete(req.params.id);
    if (data) {
      return res.status(200).json({
        data: 'Succefully deleted.',
      });
    } else {
      return res.status(400).json({
        data: 'Some thing wrong.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteMarquee = async (req, res) => {
  try {
    let data = await marquee.findByIdAndDelete(req.params.id);
    if (data) {
      return res.status(200).json({
        data: 'Succefully deleted.',
      });
    } else {
      return res.status(400).json({
        data: 'Some thing wrong.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteProcess = async (req, res) => {
  try {
    let data = await process_view.findByIdAndDelete(req.params.id);
    if (data) {
      return res.status(200).json({
        data: 'Succefully deleted.',
      });
    } else {
      return res.status(400).json({
        data: 'Some thing wrong.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteTeamContent = async (req, res) => {
  try {
    let data = await team_content.findByIdAndDelete(req.params.id);
    if (data) {
      return res.status(200).json({
        data: 'Succefully deleted.',
      });
    } else {
      return res.status(400).json({
        data: 'Some thing wrong.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteDeveloper = async (req, res) => {
  try {
    let fdata = await developer.findById(req.params.id);
    fs.unlinkSync(path.join(__dirname, '..', fdata.cv));
    let data = await developer.findByIdAndDelete(req.params.id);
    if (data) {
      return res.status(200).json({
        data: 'Succefully deleted.',
      });
    } else {
      return res.status(400).json({
        data: 'Some thing wrong.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteApplyDeveloper = async (req, res) => {
  try {
    let fdata = await apply_developer.findById(req.params.id);
    fs.unlinkSync(path.join(__dirname, '..', fdata.cv));
    let data = await apply_developer.findByIdAndDelete(req.params.id);
    if (data) {
      return res.status(200).json({
        data: 'Succefully deleted.',
      });
    } else {
      return res.status(400).json({
        data: 'Some thing wrong.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.DeleteHire = async (req, res) => {
  try {
    let data = await hire.findByIdAndDelete(req.params.id);
    if (data) {
      return res.status(200).json({
        data: 'Succefully deleted.',
      });
    } else {
      return res.status(400).json({
        data: 'Some thing wrong.',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.EditAdmin = async (req, res) => {
  try {
    console.log(req.body);
    let id = req.params.id;
    let data = await admin.findByIdAndUpdate(id, req.body);
    if (data) {
      let data = await admin.findById(req.params.id);
      let token = jwt.sign({ data }, 'secret', { expiresIn: '1d' });
      return res.status(200).json({ data: token });
    } else {
      return res.status(400).json('data is not found');
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.EditJob = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await job.findByIdAndUpdate(id, req.body);
    if (data) {
      return res.status(200).json({ data: data });
    } else {
      return res.status(400).json('data is not found');
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.EditMarquee = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await marquee.findByIdAndUpdate(id, req.body);
    if (data) {
      return res.status(200).json({ data: data });
    } else {
      return res.status(400).json('data is not found');
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.EditProcess = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await process_view.findByIdAndUpdate(id, req.body);
    if (data) {
      return res.status(200).json({ data: data });
    } else {
      return res.status(400).json('data is not found');
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.EditTeamContent = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await team_content.findByIdAndUpdate(id, req.body);
    if (data) {
      return res.status(200).json({ data: data });
    } else {
      return res.status(400).json('data is not found');
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.EditBenefit = async (req, res) => {
  try {
    let id = req.params.id;
    if (req.file) {
      let data = await benefit.findById({
        _id: id,
      });
      fs.unlinkSync(path.join(__dirname, '..', data.img));
      req.body.img = benefit.path + '/' + req.file.filename;
      let fdata = await benefit.findByIdAndUpdate(id, req.body);
      if (fdata) {
        return res.status(200).json({
          data: 'Data Updated ',
          fdata,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    } else {
      let data = await benefit.findByIdAndUpdate(id, req.body);
      if (data) {
        return res.status(200).json({
          data: 'Data Updated ',
          data,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.EditService = async (req, res) => {
  try {
    let id = req.params.id;
    if (req.file) {
      let data = await service.findById({
        _id: id,
      });
      fs.unlinkSync(path.join(__dirname, '..', data.img));
      req.body.img = service.path + '/' + req.file.filename;
      let fdata = await service.findByIdAndUpdate(id, req.body);
      if (fdata) {
        return res.status(200).json({
          data: 'Data Updated ',
          fdata,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    } else {
      let data = await service.findByIdAndUpdate(id, req.body);
      if (data) {
        return res.status(200).json({
          data: 'Data Updated ',
          data,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.EditRemoteHiring = async (req, res) => {
  try {
    let id = req.params.id;
    if (req.file) {
      let data = await remote_hiring.findById({
        _id: id,
      });
      fs.unlinkSync(path.join(__dirname, '..', data.img));
      req.body.img = remote_hiring.path + '/' + req.file.filename;
      let fdata = await remote_hiring.findByIdAndUpdate(id, req.body);
      if (fdata) {
        return res.status(200).json({
          data: 'Data Updated ',
          fdata,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    } else {
      let data = await remote_hiring.findByIdAndUpdate(id, req.body);
      if (data) {
        return res.status(200).json({
          data: 'Data Updated ',
          data,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.EditAccessProject = async (req, res) => {
  try {
    let id = req.params.id;
    if (req.file) {
      let data = await access_project.findById({
        _id: id,
      });
      fs.unlinkSync(path.join(__dirname, '..', data.img));
      req.body.img = access_project.path + '/' + req.file.filename;
      let fdata = await access_project.findByIdAndUpdate(id, req.body);
      if (fdata) {
        return res.status(200).json({
          data: 'Data Updated ',
          fdata,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    } else {
      let data = await access_project.findByIdAndUpdate(id, req.body);
      if (data) {
        return res.status(200).json({
          data: 'Data Updated ',
          data,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.EditProject = async (req, res) => {
  try {
    let id = req.params.id;
    if (req.file) {
      let data = await project.findById({
        _id: id,
      });
      fs.unlinkSync(path.join(__dirname, '..', data.img));
      req.body.img = project.path + '/' + req.file.filename;
      let fdata = await project.findByIdAndUpdate(id, req.body);
      if (fdata) {
        return res.status(200).json({
          data: 'Data Updated ',
          fdata,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    } else {
      let data = await project.findByIdAndUpdate(id, req.body);
      if (data) {
        return res.status(200).json({
          data: 'Data Updated ',
          data,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.EditClient = async (req, res) => {
  try {
    let id = req.params.id;
    if (req.file) {
      let data = await client.findById({
        _id: id,
      });
      fs.unlinkSync(path.join(__dirname, '..', data.img));
      req.body.img = client.path + '/' + req.file.filename;
      let fdata = await client.findByIdAndUpdate(id, req.body);
      if (fdata) {
        return res.status(200).json({
          data: 'Data Updated ',
          fdata,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    } else {
      let data = await client.findByIdAndUpdate(id, req.body);
      if (data) {
        return res.status(200).json({
          data: 'Data Updated ',
          data,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.EditReview = async (req, res) => {
  try {
    let id = req.params.id;
    if (req.file) {
      let data = await review.findById({
        _id: id,
      });
      fs.unlinkSync(path.join(__dirname, '..', data.img));
      req.body.img = review.path + '/' + req.file.filename;
      let fdata = await review.findByIdAndUpdate(id, req.body);
      if (fdata) {
        return res.status(200).json({
          data: 'Data Updated ',
          fdata,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    } else {
      let data = await review.findByIdAndUpdate(id, req.body);
      if (data) {
        return res.status(200).json({
          data: 'Data Updated ',
          data,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.EditTestimonial = async (req, res) => {
  try {
    let id = req.params.id;
    if (req.file) {
      let data = await testimonial.findById({
        _id: id,
      });
      fs.unlinkSync(path.join(__dirname, '..', data.img));
      req.body.img = testimonial.path + '/' + req.file.filename;
      let fdata = await testimonial.findByIdAndUpdate(id, req.body);
      if (fdata) {
        return res.status(200).json({
          data: 'Data Updated ',
          fdata,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    } else {
      let data = await testimonial.findByIdAndUpdate(id, req.body);
      if (data) {
        return res.status(200).json({
          data: 'Data Updated ',
          data,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.EditDeveloper = async (req, res) => {
  try {
    if (req.file) {
      let id = req.params.id;
      let fdata = await developer.findById(req.params.id);

      fs.unlinkSync(path.join(__dirname, '..', fdata.cv));

      req.body.cv = developer.path + '/' + req.file.filename;

      let data = await developer.findByIdAndUpdate(id, req.body);
      if (data) {
        return res.json({
          status: 200,
          message: 'Data Updated',
          data,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    } else {
      let id = req.params.id;
      let data = await developer.findByIdAndUpdate(id, req.body);
      if (data) {
        return res.json({
          status: 200,
          message: 'Data Updated',
          data,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.EditApplyDeveloper = async (req, res) => {
  try {
    if (req.file) {
      let id = req.params.id;
      let fdata = await apply_developer.findById(req.params.id);

      fs.unlinkSync(path.join(__dirname, '..', fdata.cv));

      req.body.cv = apply_developer.path + '/' + req.file.filename;

      let data = await apply_developer.findByIdAndUpdate(id, req.body);
      if (data) {
        return res.json({
          status: 200,
          message: 'Data Updated',
          data,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    } else {
      let id = req.params.id;
      let data = await apply_developer.findByIdAndUpdate(id, req.body);
      if (data) {
        return res.json({
          status: 200,
          message: 'Data Updated',
          data,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.EditCompany = async (req, res) => {
  try {
    if (req.files.pdf && req.files.photo) {
      let data = await company.findById(req.params.id);
      fs.unlinkSync(path.join(__dirname, '..', data.photo));
      fs.unlinkSync(path.join(__dirname, '..', data.pdf));
      req.body.photo = req.files.photo[0].path;
      req.body.pdf = req.files.pdf[0].path;
      let fdata = await company.findByIdAndUpdate(req.params.id, req.body);
      if (fdata) {
        return res.status(200).json({ msg: 'Data Updated Successfully.' });
      } else {
        return res.status(400).json('data is not found');
      }
    }
    if (req.files.photo) {
      let data = await company.findById(req.params.id);
      fs.unlinkSync(path.join(__dirname, '..', data.photo));
      req.body.photo = req.files.photo[0].path;
      let fdata = await company.findByIdAndUpdate(req.params.id, req.body);
      if (fdata) {
        let data = await company.findById(req.params.id);
        let token = jwt.sign({ data }, 'secret', { expiresIn: '1d' });
        return res
          .status(200)
          .json({ data: token, msg: 'Data Updated Successfully.' });
      } else {
        return res.status(400).json('data is not found');
      }
    } else if (req.files.pdf) {
      let data = await company.findById(req.params.id);
      fs.unlinkSync(path.join(__dirname, '..', data.pdf));
      req.body.pdf = req.files.pdf[0].path;
      let fdata = await company.findByIdAndUpdate(req.params.id, req.body);
      if (fdata) {
        let data = await company.findById(req.params.id);
        let token = jwt.sign({ data }, 'secret', { expiresIn: '1d' });
        return res
          .status(200)
          .json({ data: token, msg: 'Data Updated Successfully.' });
      } else {
        return res.status(400).json('data is not found');
      }
    } else {
      let data = await company.findByIdAndUpdate(req.params.id, req.body);
      if (data) {
        let data = await company.findById(req.params.id);
        let token = jwt.sign({ data }, 'secret', { expiresIn: '1d' });
        return res
          .status(200)
          .json({ data: token, msg: 'Data Updated Successfully.' });
      } else {
        return res.status(400).json('data is not found');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.EditBlog = async (req, res) => {
  try {
    let id = req.params.id;
    if (req.file) {
      let data = await blog.findById({
        _id: id,
      });
      fs.unlinkSync(path.join(__dirname, '..', data.img));
      req.body.img = blog.path + '/' + req.file.filename;
      let fdata = await blog.findByIdAndUpdate(id, req.body);
      if (fdata) {
        return res.status(200).json({
          data: 'Data Updated ',
          fdata,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    } else {
      let data = await blog.findByIdAndUpdate(id, req.body);
      if (data) {
        return res.status(200).json({
          data: 'Data Updated ',
          data,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.EditEvent = async (req, res) => {
  try {
    let id = req.params.id;
    if (req.file) {
      let data = await event.findById({
        _id: id,
      });
      fs.unlinkSync(path.join(__dirname, '..', data.img));
      req.body.img = event.path + '/' + req.file.filename;
      let fdata = await event.findByIdAndUpdate(id, req.body);
      if (fdata) {
        return res.status(200).json({
          data: 'Data Updated ',
          fdata,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    } else {
      let data = await event.findByIdAndUpdate(id, req.body);
      if (data) {
        return res.status(200).json({
          data: 'Data Updated ',
          data,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.EditDev = async (req, res) => {
  try {
    let id = req.params.id;
    if (req.file) {
      let data = await dev.findById({
        _id: id,
      });
      fs.unlinkSync(path.join(__dirname, '..', data.img));
      req.body.img = dev.path + '/' + req.file.filename;
      let fdata = await dev.findByIdAndUpdate(id, req.body);
      if (fdata) {
        return res.status(200).json({
          data: 'Data Updated ',
          fdata,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    } else {
      let data = await dev.findByIdAndUpdate(id, req.body);
      if (data) {
        return res.status(200).json({
          data: 'Data Updated ',
          data,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.EditTeam1 = async (req, res) => {
  try {
    let id = req.params.id;
    if (req.file) {
      let data = await team1.findById({
        _id: id,
      });
      fs.unlinkSync(path.join(__dirname, '..', data.img));
      req.body.img = team1.path + '/' + req.file.filename;
      let fdata = await team1.findByIdAndUpdate(id, req.body);
      if (fdata) {
        return res.status(200).json({
          data: 'Data Updated ',
          fdata,
        });
      } else {
        return res.status(400).json('Data is not found');
      }
    } else {
      let data = await team1.findByIdAndUpdate(id, req.body);
      if (data) {
        return res.status(200).json({
          data: 'Data Updated ',
          data,
        });
      } else {
        return res.status(400).json('Data is not found');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.EditTeam2 = async (req, res) => {
  try {
    let id = req.params.id;
    if (req.file) {
      let data = await team2.findById({
        _id: id,
      });
      fs.unlinkSync(path.join(__dirname, '..', data.img));
      req.body.img = team2.path + '/' + req.file.filename;
      let fdata = await team2.findByIdAndUpdate(id, req.body);
      if (fdata) {
        return res.status(200).json({
          data: 'Data Updated ',
          fdata,
        });
      } else {
        return res.status(400).json('Data is not found');
      }
    } else {
      let data = await team2.findByIdAndUpdate(id, req.body);
      if (data) {
        return res.status(200).json({
          data: 'Data Updated ',
          data,
        });
      } else {
        return res.status(400).json('Data is not found');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.EditHire = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await hire.findByIdAndUpdate(id, req.body);
    if (data) {
      return res.json({
        status: 200,
        message: 'Data Updated',
        data,
      });
    } else {
      return res.status(400).json('data is not found');
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.EditSkill = async (req, res) => {
  try {
    let id = req.params.id;
    if (req.file) {
      let data = await skill.findById({
        _id: id,
      });
      fs.unlinkSync(path.join(__dirname, '..', data.img));
      req.body.img = skill.path + '/' + req.file.filename;
      let fdata = await skill.findByIdAndUpdate(id, req.body);
      if (fdata) {
        return res.status(200).json({
          data: 'Data Updated ',
          fdata,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    } else {
      let data = await skill.findByIdAndUpdate(id, req.body);
      if (data) {
        return res.status(200).json({
          data: 'Data Updated ',
          data,
        });
      } else {
        return res.status(400).json('data is not found');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.LoginProcess = async (req, res) => {
  try {
    let data = await company.findOne({ email: req.body.email });
    if (data) {
      if (data.password === req.body.password) {
        try {
          const user = process.env.GOOGLE_EMAIL_SERVICE_USER;
          const pass = process.env.GOOGLE_EMAIL_SERVICE_PASS;
          console.log(user, pass);
          var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user,
              pass,
            },
          });
          await transporter.sendMail({
            from: process.env.GOOGLE_EMAIL_SERVICE_USER,
            to: req.body.email,
            subject: `Hello ${data.company_name} ✔`,
            html: `<h2>Welcome to Iwebro. Thank You For Visiting Iwebro.</h2><b> Successfully login in talent panel.</h1>`,
          });
        } catch (error) {
          console.log(`Email trigger error: ${error}`);
        }
        let token = jwt.sign({ data }, 'secret', { expiresIn: '1d' });
        res.status(200).json({ token });
      } else {
        res.status(400).json({ message: 'Wrong Password.' });
      }
    } else {
      res.status(400).json({ message: 'Talent Not Found.' });
    }
  } catch (error) {
    res.status(500).json(`Error: ${error}`);
  }
};

module.exports.fetchData = async (req, res) => {
  let monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let lastMonthHireUser = 0;
  let SecondLastMonthHireUser = 0;
  let ThirdLastMonthHireUser = 0;
  let FourthLastMonthHireUser = 0;

  let data1 = await hire.find({});

  data1.map((v) => {
    if (new Date(v.createdAt).getMonth() + 1 === new Date().getMonth() + 1) {
      lastMonthHireUser = lastMonthHireUser + 1;
    }
    if (new Date(v.createdAt).getMonth() + 1 === new Date().getMonth()) {
      SecondLastMonthHireUser = SecondLastMonthHireUser + 1;
    }
    if (new Date(v.createdAt).getMonth() + 1 === new Date().getMonth() - 1) {
      ThirdLastMonthHireUser = ThirdLastMonthHireUser + 1;
    }
    if (new Date(v.createdAt).getMonth() + 1 === new Date().getMonth() - 2) {
      FourthLastMonthHireUser = FourthLastMonthHireUser + 1;
    }
  });

  let data = [
    ['x', 'hire user'],
    [monthNames[new Date().getMonth() - 3], FourthLastMonthHireUser],
    [monthNames[new Date().getMonth() - 2], ThirdLastMonthHireUser],
    [monthNames[new Date().getMonth() - 1], SecondLastMonthHireUser],
    [monthNames[new Date().getMonth()], lastMonthHireUser],
  ];

  res.status(200).json({ data: data });
};

module.exports.fetchData2 = async (req, res) => {
  let monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let lastMonthDeveloper = 0;
  let SecondLastMonthDeveloper = 0;
  let ThirdLastMonthDeveloper = 0;
  let FourthLastMonthDeveloper = 0;

  let data1 = await developer.find({});

  data1.map((v) => {
    if (new Date(v.createdAt).getMonth() + 1 === new Date().getMonth() + 1) {
      lastMonthDeveloper = lastMonthDeveloper + 1;
    }
    if (new Date(v.createdAt).getMonth() + 1 === new Date().getMonth()) {
      SecondLastMonthDeveloper = SecondLastMonthDeveloper + 1;
    }
    if (new Date(v.createdAt).getMonth() + 1 === new Date().getMonth() - 1) {
      ThirdLastMonthDeveloper = ThirdLastMonthDeveloper + 1;
    }
    if (new Date(v.createdAt).getMonth() + 1 === new Date().getMonth() - 2) {
      FourthLastMonthDeveloper = FourthLastMonthDeveloper + 1;
    }
  });

  let data = [
    ['x', 'developer'],
    [monthNames[new Date().getMonth() - 3], FourthLastMonthDeveloper],
    [monthNames[new Date().getMonth() - 2], ThirdLastMonthDeveloper],
    [monthNames[new Date().getMonth() - 1], SecondLastMonthDeveloper],
    [monthNames[new Date().getMonth()], lastMonthDeveloper],
  ];

  res.status(200).json({ data: data });
};

module.exports.fetchData3 = async (req, res) => {
  let data1 = await job.find({}).countDocuments();
  let data2 = await company.find({}).countDocuments();
  let data3 = await developer.find({}).countDocuments();
  let data4 = await hire.find({}).countDocuments();

  res
    .status(200)
    .json({ data1: data1, data2: data2, data3: data3, data4: data4 });
};

module.exports.fetchData4 = async (req, res) => {
  let monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let lastMonthHireUser = 0;
  let SecondLastMonthHireUser = 0;
  let ThirdLastMonthHireUser = 0;
  let FourthLastMonthHireUser = 0;

  let data1 = await job.find({ companyId: req.params.id });

  data1.map((v) => {
    if (new Date(v.createdAt).getMonth() + 1 === new Date().getMonth() + 1) {
      lastMonthHireUser = lastMonthHireUser + 1;
    }
    if (new Date(v.createdAt).getMonth() + 1 === new Date().getMonth()) {
      SecondLastMonthHireUser = SecondLastMonthHireUser + 1;
    }
    if (new Date(v.createdAt).getMonth() + 1 === new Date().getMonth() - 1) {
      ThirdLastMonthHireUser = ThirdLastMonthHireUser + 1;
    }
    if (new Date(v.createdAt).getMonth() + 1 === new Date().getMonth() - 2) {
      FourthLastMonthHireUser = FourthLastMonthHireUser + 1;
    }
  });

  let data = [
    ['x', 'job requirement'],
    [monthNames[new Date().getMonth() - 3], FourthLastMonthHireUser],
    [monthNames[new Date().getMonth() - 2], ThirdLastMonthHireUser],
    [monthNames[new Date().getMonth() - 1], SecondLastMonthHireUser],
    [monthNames[new Date().getMonth()], lastMonthHireUser],
  ];

  res.status(200).json({ data: data });
};

module.exports.fetchData5 = async (req, res) => {
  let monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let lastMonthDeveloper = 0;
  let SecondLastMonthDeveloper = 0;
  let ThirdLastMonthDeveloper = 0;
  let FourthLastMonthDeveloper = 0;

  let data1 = await developer.find({ companyId: req.params.id });

  data1.map((v) => {
    if (new Date(v.createdAt).getMonth() + 1 === new Date().getMonth() + 1) {
      lastMonthDeveloper = lastMonthDeveloper + 1;
    }
    if (new Date(v.createdAt).getMonth() + 1 === new Date().getMonth()) {
      SecondLastMonthDeveloper = SecondLastMonthDeveloper + 1;
    }
    if (new Date(v.createdAt).getMonth() + 1 === new Date().getMonth() - 1) {
      ThirdLastMonthDeveloper = ThirdLastMonthDeveloper + 1;
    }
    if (new Date(v.createdAt).getMonth() + 1 === new Date().getMonth() - 2) {
      FourthLastMonthDeveloper = FourthLastMonthDeveloper + 1;
    }
  });

  let data = [
    ['x', 'developer'],
    [monthNames[new Date().getMonth() - 3], FourthLastMonthDeveloper],
    [monthNames[new Date().getMonth() - 2], ThirdLastMonthDeveloper],
    [monthNames[new Date().getMonth() - 1], SecondLastMonthDeveloper],
    [monthNames[new Date().getMonth()], lastMonthDeveloper],
  ];

  res.status(200).json({ data: data });
};

module.exports.fetchData6 = async (req, res) => {
  let data1 = await job.find({ companyId: req.params.id }).countDocuments();
  let data2 = await job
    .find({ companyId: req.params.id, status: true })
    .countDocuments();
  let data3 = await job
    .find({ companyId: req.params.id, status: false })
    .countDocuments();
  let data4 = await developer
    .find({ companyId: req.params.id })
    .countDocuments();

  res
    .status(200)
    .json({ data1: data1, data2: data2, data3: data3, data4: data4 });
};

module.exports.Add;