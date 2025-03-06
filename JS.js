  // Initialize AOS animation
  AOS.init();
        
  // Preloader
  window.addEventListener('load', function() {
      const preloader = document.querySelector('.preloader');
      preloader.style.opacity = '0';
      setTimeout(function() {
          preloader.style.display = 'none';
      }, 500);
  });
  
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
          navbar.classList.remove('bg-transparent');
      } else {
          navbar.classList.remove('scrolled');
          navbar.classList.add('bg-transparent');
      }
  });
  
  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 70,
                  behavior: 'smooth'
              });
          }
      });
  });
      // Inicializa o carrossel
      document.addEventListener('DOMContentLoaded', function() {
      new bootstrap.Carousel(document.getElementById('skillsCarousel'), {
          interval: 5000,
          wrap: true
      });
      
      // Anima os círculos de progresso quando visíveis
      const animateProgressCircles = () => {
          const circles = document.querySelectorAll('.progress-circle__circle--progress');
          circles.forEach(circle => {
              const value = circle.style.getPropertyValue('--percent');
              circle.style.strokeDashoffset = 283;
              setTimeout(() => {
                  circle.style.strokeDashoffset = 283 - (283 * value / 100);
              }, 100);
          });
      };
      
      // Chama a animação quando o slide muda
      const carousel = document.getElementById('skillsCarousel');
      carousel.addEventListener('slid.bs.carousel', animateProgressCircles);
      
      // Animação inicial
      animateProgressCircles();
  });

    document.getElementById("whatsapp-form").addEventListener("submit", function(event) {
        event.preventDefault();

        // Captura os valores do formulário
        let nome = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let assunto = document.getElementById("subject").value.trim();
        let mensagem = document.getElementById("message").value.trim();

        // Verifica se os campos estão preenchidos
        if (!nome || !email || !assunto || !mensagem) {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return;
        }

        // Número de destino no formato internacional
        let numero = "5547997598910"; // Substitua pelo número correto

        // Formata a mensagem
        let texto = `Olá! Meu nome é "${nome}".\n Email: ${email}\n Assunto: ${assunto}\n Mensagem: ${mensagem}`;

        // Codifica a URL
        let url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

        // Redireciona para o WhatsApp
        window.open(url, "_blank");
    });

    document.addEventListener("DOMContentLoaded", function () {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 2500, // Troca os slides a cada 2.5 segundos
                disableOnInteraction: false, // Continua rodando após interação do usuário
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 },
            }
        });
    });
