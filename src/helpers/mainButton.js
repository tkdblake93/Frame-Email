module.exports = function (options) {
  var button = '<a href="https://www.google.com/">' + options.fn(this) + '</a>';
  return button;
};