const Project = require("../models/project");
const Issue = require("../models/issue");

// create a project for the user
module.exports.create = async function (req, res) {
  try {
    await Project.create({
      name: req.body.name,
      description: req.body.description,
      author: req.body.author,
    });
    return res.redirect("back");
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
};

// find project and display it in the project page
module.exports.project = async function (req, res) {
  try {
    let project = await Project.findById(req.params.id).populate("issues");

    if (project) {
      const searchVariable = req.query.titleAuthor || "";
      let arr = [];
      for (let issue of project.issues) {
        if (issue.title.includes(searchVariable) || issue.title === searchVariable || issue.author === searchVariable) {
          arr.push(issue);
        }
      }
      //  console.log(arr) ;

      return res.render("project_page", {
        title: "project-page",
        project,
        issues: arr.length === 0 ? project.issues : arr,
        products : arr.length === 0 ? project.issues : arr,

      });
    }
    return res.redirect("back");
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
};


// create issue
module.exports.createIssue = async function (req, res) {
  const { title,label , author, description } = req.body;
  try {
    let project = await Project.findById(req.params.id);
    if (project) {
      let issue = await Issue.create({
        title,
        author,
        label, 
        description,
        projectId : req.params.id
      });
      await project.issues.push(issue);
      let labelPresent = await project.labels.find(element =>(element.toUpperCase() === req.body.label.toUpperCase())) ;
      if(!labelPresent){
        project.labels.push(label) ;
      }
      await project.save();
      console.log("issue", issue);
    }
    // console.log("project" , project ) ;
    res.redirect("back");
  } catch (error) {
    console.log(error);
    return res.redirect("back");
  }
};

