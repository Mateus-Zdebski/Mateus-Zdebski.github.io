const githubUsername = 'Mateus-Zdebski';

const skillIcons = {
    JavaScript: 'fab fa-js',
    Python: 'fab fa-python',
    Java: 'fab fa-java',
    HTML: 'fab fa-html5',
    CSS: 'fab fa-css3-alt',
    PHP: 'fab fa-php',
    'C++': 'fab fa-cuttlefish',
    Bootstrap: 'fab fa-bootstrap',
    MySQL: 'fas fa-database',
    Arduino: 'fab fa-arduino',
    // Adicione outros ícones conforme necessário
};

const projectImages = {
    'LojaVeiculos': '/Img/324266134-9480eb37-112b-4ed4-afcb-5b1f7d18ab49.png',
    'Fokus_alura': '/Img/mago123456677_Fokus_alura - Brave 24_05_2024 10_32_03.png',
    'Bot-esTockJS': '/Img/mago123456677_Fokus_alura - Brave 24_05_2024 10_46_21.png',
    'Decodificador': '/Img/mago123456677_Fokus_alura - Brave 24_05_2024 10_49_45.png',
    'o-que-aprendi-no-senai-em-site': '/Img/1.jpg',
    '-o-que-aprendi-no-senai-em-java': '/Img/1.jpg',
    'PortefolioAlura': '/Img/168887837-b6d26532-6782-48dc-92eb-e48bf6c57a15.png',
    'AluraGeek': '/Img/New AluraGeek - PT – Figma - Brave 27_05_2024 11_32_39.png',
    'Porto-Seco-Java': '/Img/1.jpg',
    'mago123456677': '/Img/1.jpg',
    'MagiskOnWSA':'/Img/1.jpg',
};

async function fetchGithubRepos() {
    const response = await fetch(`https://api.github.com/users/Mateus-Zdebski/repos`);
    const repos = await response.json();
    return repos;
}

function extractSkills(repos) {
    const skills = {};
    repos.forEach(repo => {
        if (repo.language) {
            if (skills[repo.language]) {
                skills[repo.language] += 1;
            } else {
                skills[repo.language] = 1;
            }
        }
    });
    return skills;
}

function createSkillElement(skill, percentage) {
    const skillBox = document.createElement('div');
    skillBox.classList.add('skill-box');

    const skillTitle = document.createElement('div');
    skillTitle.classList.add('skill-title');

    const skillIcon = document.createElement('i');
    skillIcon.className = skillIcons[skill] || 'fas fa-code'; // Use um ícone padrão se não houver correspondência

    const skillName = document.createElement('h4');
    skillName.textContent = skill;

    const skillPercentage = document.createElement('span');
    skillPercentage.classList.add('skill-percentage');
    skillPercentage.textContent = `${Math.round(percentage)}%`;

    skillTitle.appendChild(skillIcon);
    skillTitle.appendChild(skillName);
    skillTitle.appendChild(skillPercentage);

    const skillBar = document.createElement('div');
    skillBar.classList.add('skill-bar');

    const skillProgress = document.createElement('div');
    skillProgress.classList.add('skill-progress');
    skillProgress.style.width = `${percentage}%`;

    skillBar.appendChild(skillProgress);
    skillBox.appendChild(skillTitle);
    skillBox.appendChild(skillBar);

    return skillBox;
}

async function displaySkills() {
    const repos = await fetchGithubRepos();
    const skills = extractSkills(repos);
    const totalRepos = repos.length;

    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = '';

    Object.keys(skills).forEach(skill => {
        const percentage = (skills[skill] / totalRepos) * 100;
        const skillElement = createSkillElement(skill, percentage);
        skillsContainer.appendChild(skillElement);
    });
}

async function displayProjects() {
    const repos = await fetchGithubRepos();
    const portifolioContainer = document.getElementById('portifolio-container');
    portifolioContainer.innerHTML = '';

    repos.forEach(repo => {
        const projectBox = document.createElement('div');
        projectBox.classList.add('portifolio-box');

        const projectLink = document.createElement('a');
        projectLink.href = repo.html_url;
        projectLink.target = '_blank';

        const projectImage = document.createElement('img');
        projectImage.src = projectImages[repo.name] || '/Img/default_project_image.png'; 
        projectImage.alt = repo.name;

        projectLink.appendChild(projectImage);

        const portifolioLayer = document.createElement('div');
        portifolioLayer.classList.add('portifolio-layer');

        const projectTitle = document.createElement('h4');
        projectTitle.textContent = repo.name;

        const projectIcon = document.createElement('i');
        projectIcon.className = 'fa-regular fa-share-from-square';

        portifolioLayer.appendChild(projectTitle);
        portifolioLayer.appendChild(projectIcon);

        projectBox.appendChild(projectLink);
        projectBox.appendChild(portifolioLayer);

        portifolioContainer.appendChild(projectBox);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displaySkills();
    displayProjects();
});

