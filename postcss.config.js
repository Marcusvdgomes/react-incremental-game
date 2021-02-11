const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

module.exports = {
    plugins: [
        require("autoprefixer"),
        tailwindcss("./tailwind.config.js"),
        process.env.NODE_ENV === 'production' ?
        require('@fullhuman/postcss-purgecss')({
            content:['./src/**/*.js', './public/index.html'],
            defaultEtractor:(content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
        }): '',
    ]
}