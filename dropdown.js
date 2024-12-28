const dropdownContent = document.querySelector('.dropdown-content');
const dropdownBtn = document.querySelector('.dropdown-btn');

dropdownBtn.addEventListener('click', () => {
  console.log(dropdownContent.className);
  dropdownContent.classList.toggle('visible');
});
