/* ==========================================================================
   BITES - LÓGICA DEL CARRUSEL Y INTERACTIVIDAD EN JAVASCRIPT PURO
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Control del Slider / Carrusel (solo si existe en la vista actual)
    const slides = document.querySelectorAll(".slide");
    const indicadores = document.querySelectorAll(".indicador");
    const btnPrev = document.querySelector(".slider-btn.prev");
    const btnNext = document.querySelector(".slider-btn.next");

    if (slides.length > 0) {
        let indiceActual = 0;
        let intervaloCarrusel;

        const mostrarSlide = (indice) => {
            slides.forEach((slide, i) => {
                slide.classList.toggle("activo", i === indice);
                if (indicadores[i]) {
                    indicadores[i].classList.toggle("activo", i === indice);
                }
            });
        };

        const siguienteSlide = () => {
            indiceActual = (indiceActual + 1) % slides.length;
            mostrarSlide(indiceActual);
        };

        const anteriorSlide = () => {
            indiceActual = (indiceActual - 1 + slides.length) % slides.length;
            mostrarSlide(indiceActual);
        };

        const iniciarAutoPlay = () => {
            intervaloCarrusel = setInterval(siguienteSlide, 5000);
        };

        const reiniciarAutoPlay = () => {
            clearInterval(intervaloCarrusel);
            iniciarAutoPlay();
        };

        btnNext.addEventListener("click", () => {
            siguienteSlide();
            reiniciarAutoPlay();
        });

        btnPrev.addEventListener("click", () => {
            anteriorSlide();
            reiniciarAutoPlay();
        });

        indicadores.forEach((boton, i) => {
            boton.addEventListener("click", () => {
                indiceActual = i;
                mostrarSlide(indiceActual);
                reiniciarAutoPlay();
            });
        });

        iniciarAutoPlay();
    }

    // 2. Confirmación visual del Formulario de Contacto
    const formulario = document.getElementById("form-contacto");
    const mensajeExito = document.getElementById("mensaje-confirmacion");

    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();
            mensajeExito.style.display = "block";
            formulario.reset();
            setTimeout(() => {
                mensajeExito.style.display = "none";
            }, 5000);
        });
    }
});