const path = require('path');

module.exports = {
    entry: './scriptTwo.js', // Entry point
    output: {
        filename: 'bundle.js', // Output file name
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    mode: 'development', // Set the mode to development
};
