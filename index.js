const submit = document.querySelector('#submit')

submit.onclick = e => {
  localStorage.setItem('val', main.value)
}
get.onclick = e => {
  console.log(localStorage.getItem('val'))
}