'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Yo! Welcome to ' + chalk.red('node-express-ts') + ' generator by'+ chalk.yellow('\nLokesh Devnani')
    ));
   
    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Project Name:',
      default: this.appname
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.log(yosay(this.props.appname));
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('.'),
      this.destinationRoot(),
       { globOptions: { dot: true } }
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {
          name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('typings.json'),
      this.destinationPath('typings.json'), {
          name: this.props.name
      }
    );
  },

  install: function () {
    this.installDependencies({
      npm: true,
      bower: false
    });
  }
});





/*

module.exports = Generator.extend({
  prompting: function() {
    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    }, function(answers) {
      this.props = answers
      this.log(answers.name);
      done();
    }.bind(this));
  }, 
  writing: {
    //Copy the configuration files
    config: function () {
      // this.fs.copyTpl(
      //   this.templatePath('_package.json'),
      //   this.destinationPath('package.json'), {
      //       name: this.props.name
      //   }
      // );
      // this.fs.copyTpl(
      //   this.templatePath('_typings.json'),
      //   this.destinationPath('typings.json'), {
      //       name: this.props.name
      //   }
      // );
      this.fs.copy(
        this.templatePath('dummyfile.txt'),
        this.destinationPath('dummyfile.txt')
      );
    },
    app: function () {
      this.fs.copy(
        this.templatePath('.'),
        this.destinationRoot()
      );
    }
  },
  install: function() {
    this.installDependencies();
  }
});
*/