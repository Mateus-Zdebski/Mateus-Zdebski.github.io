// Inicialize o EmailJS com seu USER_ID (chave pública)
emailjs.init('5lAg36PWXiSkV6YET');

function enviarEmail() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!nome || !email || !numero || !assunto || !mensagem) {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    errorMessage.textContent = '';

    // Parâmetros atualizados para corresponder ao template
    const params = {
        to_name: "Nome do Destinatário", // Substitua pelo nome do destinatário
        from_name: nome, // Nome do remetente
        message: mensagem // Mensagem do formulário
    };

    console.log('Dados do formulário:', params); // Verifique os dados no console

    emailjs.send('default_service', 'template_k9a29ht', params)
        .then(function(response) {
            console.log('E-mail enviado com sucesso!', response);
            alert('E-mail enviado com sucesso!');
        }, function(error) {
            console.error('Erro ao enviar o e-mail:', error);
            alert('Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.');
        });
}
