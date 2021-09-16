const formBtn = document.querySelectorAll('.form__btn');

formBtn.forEach(item => {
  item.addEventListener('click', function(evt) {
    evt.preventDefault();
    item.innerText = 'Круто, спасибо за доверие!';
  })
})