const gulp = require("gulp");
const del = require("del");
const run = require('gulp-run-command').default;

gulp.task('clean', () => del('dist/**'));

gulp.task('build-server', run('npm run --prefix ./server build'));
gulp.task('build-client', run('ng build --prod', { cwd: 'client' }));

gulp.task('dist', gulp.series(
    () => gulp.src('server/dist/**').pipe(gulp.dest('dist')),
    () => gulp.src('client/dist/tejarat/**').pipe(gulp.dest('dist/public')),
));

gulp.task('build', gulp.series('clean', gulp.parallel('build-server', 'build-client'), 'dist'));

gulp.task('default', done => {
    console.error('Please specify the gulp command.');
    done();
});
