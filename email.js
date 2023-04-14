function sendEmail() {
    var name = document.querySelector('#fname').value;
    var message = document.querySelector('#subject').value;
    var subject = 'Contato pelo formulário do site';
    var body = 'Nome: ' + name + '\n\nMensagem: ' + message;
    var uri = 'mailto:mayte.magri@outlook.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.open(uri);
  }