function notify(message) {
  // TODO:
  let notificationElement = document.getElementById('notification');

  notificationElement.style.display = 'block';
  notificationElement.textContent = message;


  notificationElement.addEventListener('click', (e) => {
    e.currentTarget.style.display = 'none';
    notificationElement.textContent = '';
  })
}
