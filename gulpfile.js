var gulp = require("gulp"), //http://gulpjs.com/
	util = require("gulp-util"), //https://github.com/gulpjs/gulp-util
	sass = require("gulp-sass"), //https://www.npmjs.org/package/gulp-sass
	autoprefixer = require("gulp-autoprefixer"), //https://www.npmjs.org/package/gulp-autoprefixer
	minifycss = require("gulp-minify-css"), //https://www.npmjs.org/package/gulp-minify-css
	rename = require("gulp-rename"), //https://www.npmjs.org/package/gulp-rename
	ftp = require("gulp-ftp"),
	log = util.log;
var changed = require("gulp-changed");
var ngmin = require("gulp-ngmin"); // just as an example

var sassFiles = "sass/**/*.scss";


gulp.task("sass", function () {
	log("Generate CSS files " + (new Date()).toString());
	gulp.src(sassFiles)
		.pipe(sass({
			style: "expanded"
		}))
		.pipe(autoprefixer("last 3 version", "safari 5", "ie 8", "ie 9"))
		.pipe(gulp.dest(""))
		.pipe(ftp({
			host: "wearska.com",
			user: "wearska",
			pass: "BoA[niUSl1*v",
			remotePath: "/public_html/ska/wp-content/themes/bushido"
		}))
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(minifycss())
		.pipe(gulp.dest(""));
});

gulp.task("watch", function () {
	log("Watching files for modifications");
	gulp.watch(sassFiles, ["sass"]);
});
