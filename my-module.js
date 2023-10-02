// Check the Node.js version at runtime
if (process.versions.node != '18.0.0') {
  throw new Error('This module requires Node.js version 18.0.0.');
}

// Your module code here
module.exports = {
  greet: () => {
    return 'Hello, Node.js 18.0.0!';
  }
};
