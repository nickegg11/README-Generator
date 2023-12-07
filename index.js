const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
// link to Badges.js
const badges = require('./badges');



// node js prompts through inquirer to generate answers
const promptUser = () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your application?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the purpose of your application?',
    },
    
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions for your application?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter how you plan to use this application.',
    },
    // License Choices
    {
      type: 'list',
      name: 'license',
      message: 'Please choose the license used for this application from the following:',
      choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "MIT",
      ]
    },
    // Badge choice (could be a function so it auto generates whatever license is chosen previously)
    {
        type: 'list',
        name: 'badges',
        message: 'Choose appropriate licensing badge.',
        choices: badges,

    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter any testing used for application.',
    },
    {
        type: 'input',
        name: 'GitHubUrl',
        message: 'What is your GitHub URL?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'confirm',
        name: 'contributions',
        message: 'If contributing, please follow proper contributing code of conduct.',
    },
    
  ]);
};
// README.md generates below
const generateREADME = ({title, badges, description, installation , usage, license, test, GitHubUrl, email, contributions}) =>
 `# ${title}
  ## ${badges}


 #### Table of Contents
 1. [Application Description](#application-description)
 2. [Installation Instructions](#installation-instructions)
 3. [Usage Info](#usage-info)
 4. [Contribution Guidelines](#contribution-guidelines)
 5. [Test Instructions](#test-instructions)
 6. [License](#license)
 7. [Questions](#questions)

 ## Project Description
  ${description}

 ## Installation Instructions
  ${installation}

 ## Usage Info
  ${usage}

 ## Contribution Guidelines
  ${contributions}
 
 ## Test Instructions
  ${test}

 ## License
  ${license}

 ## Questions
  For questions or concerns, please contact ${email}

  Find me on GitHub at ${GitHubUrl}

 ## Links
  Link to video of README.md Generator functioning https://drive.google.com/file/d/19hpOAWCos4Cifn2wXzloqqIb5SnnuFQn/view`;
// writes the file
  const init = () => {
    promptUser()
        .then((answers) => writeFile('README.md', generateREADME(answers)))
        .then(() => console.log('Successfully wrote README.md'))
        .catch((err) => console.log(err));
};

init();   

