// Inicialize o EmailJS com seu USER_ID (chave pública)
emailjs.init('5lAg36PWXiSkV6YET');

// Função para enviar o e-mail
function enviarEmail() {
    // Coleta os dados do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    // Parâmetros do e-mail
    var params = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    // Envio do e-mail
    emailjs.send('default_service', 'template_k9a29ht', params) // Usando 'default_service'
        .then(function(response) {
            console.log('E-mail enviado com sucesso!', response);
            alert('E-mail enviado com sucesso!');
        },
        function (error) {
            console.error('Erro ao enviar o e-mail:', error);
            alert('Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.');
        });
}
