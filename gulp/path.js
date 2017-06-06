const path = require("path");

const root = path.resolve(__dirname, "../"); //?

console.log(root);

module.exports = {
    root: root,
    dist: path.resolve(root, "dist"),
    assets: path.resolve(root, "assets"),
    scripts: path.resolve(root, "assets/scripts"),
    styles: path.resolve(root, "assets/styles"),
    images: path.resolve(root, "assets/images"),
}