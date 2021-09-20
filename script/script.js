const forms = document.querySelectorAll('.form');


forms.forEach(item => {
  item.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const formBtn = item.querySelector('.form__btn');
    formBtn.innerText = 'Круто, спасибо за доверие!';
  })
})