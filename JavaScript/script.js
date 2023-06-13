window.addEventListener('scroll', function() {
  var textContainer = document.querySelector('.text-container');
  var btnContainer = document.querySelector('.btn-container');

  var textBottom = textContainer.getBoundingClientRect().bottom;
  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  if (textBottom <= viewportHeight) {
    btnContainer.style.display = 'block';
  } else {
    btnContainer.style.display = 'none';
  }
});
