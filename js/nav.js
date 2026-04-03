// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobile-nav');
  if (burger && mobileNav) {
    burger.addEventListener('click', function () {
      mobileNav.classList.toggle('mobile-nav--open');
    });
  }
  // FAQ accordion
  document.querySelectorAll('.faq__question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const answer = btn.nextElementSibling;
      const isOpen = answer.classList.contains('open');
      document.querySelectorAll('.faq__answer').forEach(function (a) { a.classList.remove('open'); });
      document.querySelectorAll('.faq__question').forEach(function (q) { q.classList.remove('open'); });
      if (!isOpen) { answer.classList.add('open'); btn.classList.add('open'); }
    });
  });
});
