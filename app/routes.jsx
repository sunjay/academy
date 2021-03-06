const Home = require('./components/pages/Home');

const Lesson = require('./containers/LessonPage');

const routes = Object.freeze({
  home: Object.freeze({
    title: 'Home',
    path: 'home',
    href: '#/',
    pattern: /^\/?$/,
    component: Home,
    onEnter: Home.onPageEnter,
    onLeave: Home.onPageLeave,
  }),
  lesson: Object.freeze({
    title: 'Lesson',
    path: 'lesson/:id',
    href: '#/lesson',
    pattern: /^\/lesson\/?.*/,
    component: Lesson,
    onEnter: Lesson.onPageEnter,
    onLeave: Lesson.onPageLeave,
  }),
});

module.exports = routes;
