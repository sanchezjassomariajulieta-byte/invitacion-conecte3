
const abrirBtn = document.getElementById("abrirBtn");
const detalles = document.getElementById("detalles");

const musicaBtn = document.getElementById("musicaBtn");
const musica = document.getElementById("musica");
const mensajeMusica = document.getElementById("mensajeMusica");

// Fecha del congreso: 27 de noviembre de 2026, a las 8:00 a. m.
const fechaEvento = new Date(2026, 10, 27, 8, 0, 0);

// Abrir la invitación
abrirBtn.addEventListener("click", function () {
    detalles.classList.add("mostrar");

    detalles.scrollIntoView({
        behavior: "smooth"
    });

    abrirBtn.textContent = "✓ Invitación abierta";
});

// Cuenta regresiva
function actualizarCuenta() {
    const ahora = new Date();
    const diferencia = fechaEvento.getTime() - ahora.getTime();

    if (diferencia <= 0) {
        document.getElementById("dias").textContent = "0";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";
        return;
    }

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );

    document.getElementById("dias").textContent = dias;

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
}

// Actualizar cada segundo
actualizarCuenta();
setInterval(actualizarCuenta, 1000);

// Activar y pausar la música
musicaBtn.addEventListener("click", function () {

    if (musica.paused) {

        musica.play()
            .then(function () {
                musicaBtn.textContent = "♫ Pausar música";
                mensajeMusica.textContent = "Música activada.";
            })
            .catch(function () {
                mensajeMusica.textContent =
                    "No se pudo reproducir. Revisa el archivo musica.mp3.";
            });

    } else {

        musica.pause();
        musicaBtn.textContent = "♫ Activar música";
        mensajeMusica.textContent = "Música pausada.";
    }

});
