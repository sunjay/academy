const React = require('react');

const Navbar = require('../Navbar');
const Lesson = require('../Lesson');
const Editor = require('../Editor');
const OutputWindow = require('../OutputWindow');
const LessonActions = require('../LessonActions');

const LessonPage = () => (
  <div>
    <Navbar />
    <Lesson />
    <Editor />
    <OutputWindow />
    <LessonActions />
  </div>
);

module.exports = LessonPage;