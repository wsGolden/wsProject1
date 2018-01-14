//引入所需插件
var gulp = require("gulp"),
	sass = require("gulp-sass"),
	rename = require("gulp-rename"),
	cssnano = require("gulp-cssnano"),
	imagemin = require("gulp-imagemin"),
	concat=require("gulp-concat")
	uglify=require("gulp-uglify");
	
//编译sass
gulp.task("sass",function(){
	return gulp.src("sass/*.scss").pipe(sass({style : "expanded"})).pipe(gulp.dest("css")).pipe(rename({"suffix" : ".min"})).pipe(cssnano()).pipe(gulp.dest("css"));
})

gulp.task("script",function(){
	return gulp.src("js/*.js").pipe(rename({suffix : ".min"})).pipe(uglify()).pipe(gulp.dest("min.js"));
})
//监听任务
gulp.task("watch",function(){
	gulp.watch("sass/*.scss",["sass"]);
	gulp.watch("js/*.js",["script"]);
})