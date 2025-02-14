// Função para alternar o tema e o texto do botão
function toggleTheme() {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Atualizar o texto do botão
    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.textContent = isDarkMode ? 'Modo claro' : 'Modo escuro';
}

// Carregar o tema armazenado e definir o texto do botão corretamente
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const toggleButton = document.getElementById('theme-toggle');
    
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        toggleButton.textContent = 'Modo claro'; // Se já estiver em modo escuro, alterar o texto
    } else {
        toggleButton.textContent = 'Modo escuro'; // Se estiver em modo claro
    }
});

// Adicionar evento de clique ao botão de alternância
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Menu mobile toggle (sem alteração)
document.getElementById("menu-toggle").addEventListener("click", function () {
    const mobileMenu = document.getElementById("navbar-cta");
    mobileMenu.classList.toggle("hidden");

    // Alternar ícone do botão
    const icon = this.querySelector('svg');
    if (mobileMenu.classList.contains("hidden")) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />';
    } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
    }
});
