var gulp = require("gulp"), //http://gulpjs.com/
	util = require("gulp-util"), //https://github.com/gulpjs/gulp-util
	sass = require("gulp-sass"), //https://www.npmjs.org/package/gulp-sass
	autoprefixer = require("gulp-autoprefixer"), //https://www.npmjs.org/package/gulp-autoprefixer
	minifycss = require("gulp-minify-css"), //https://www.npmjs.org/package/gulp-minify-css
	rename = require("gulp-rename"), //https://www.npmjs.org/package/gulp-rename
	changed = require("gulp-changed"),
	concatCss = require('gulp-concat-css'),
	ftp = require("vinyl-ftp"),
	ftpAuth = require("./gulp_ftpsync.json"),
	runSequence = require('run-sequence'),
	log = util.log;

var sassFiles = "sass/**/*.scss";
var allFiles = "**";
var conn = ftp.create(ftpAuth);


gulp.task("sass", function () {
	log("Generate CSS files " + (new Date()).toString());
	gulp.src(sassFiles)
		.pipe(sass({
			style: "expanded"
		}))
		.pipe(autoprefixer("last 3 version", "safari 5", "ie 8", "ie 9"))
		.pipe(gulp.dest(""))
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(minifycss())
		.pipe(gulp.dest(""));
});

gulp.task("deploy", function () {
	log("Deploying changed files to ftp server");
	return gulp.src(["**", "!{/deploy,/deploy/**,/.git,/.git/**,/sass,/sass/**,/node_modules,/node_modules/**}"])
		.pipe(changed("deploy"))
		.pipe(conn.dest( "/public_html/ska/wp-content/themes/bushido"))
		.pipe(gulp.dest("deploy"));
	log("Done");
})
gulp.task("concat", function () {
  return gulp.src("img/**/*.css")
	.pipe(concatCss("_md_icons.scss"))
	.pipe(gulp.dest('sass/partials/'));
});

gulp.task("watch", function () {
	log("Watching files for modifications");
	gulp.watch(sassFiles, ["sass"]);
	//gulp.watch(allFiles, ["deploy"]);
});
