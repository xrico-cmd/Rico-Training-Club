const reservationButtons = document.querySelectorAll(".reserve-btn");

const reservationModalElement =
    document.getElementById("reservationModal");

const reservationModal =
    new bootstrap.Modal(reservationModalElement);


reservationButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const className = button.dataset.class;
        const day = button.dataset.day;
        const time = button.dataset.time;

        document.getElementById("modalClass").textContent = className;
        document.getElementById("modalDay").textContent = day;
        document.getElementById("modalTime").textContent = time;

        reservationModal.show();

    });

});


/* ---------- CONFIRMAR RESERVACIÓN ---------- */

const confirmReservation =
    document.getElementById("confirmReservation");


confirmReservation.addEventListener("click", function() {

    reservationModal.hide();

    setTimeout(function() {

        alert(
            "¡Reservación confirmada! 💪\n\n" +
            "Tu lugar ha sido reservado en Rico Training Club."
        );

    }, 300);

});


/* ---------- COMPRAS ---------- */

const buyButtons =
    document.querySelectorAll(".buy-btn");

const purchaseModalElement =
    document.getElementById("purchaseModal");

const purchaseModal =
    new bootstrap.Modal(purchaseModalElement);


buyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const plan = button.dataset.plan;
        const price = button.dataset.price;

        document.getElementById("planName").textContent = plan;
        document.getElementById("planPrice").textContent = price;

        purchaseModal.show();

    });

});


/* ---------- CONTINUAR COMPRA ---------- */

const continuePurchase =
    document.getElementById("continuePurchase");


continuePurchase.addEventListener("click", function() {

    purchaseModal.hide();

    setTimeout(function() {

        alert(
            "¡Excelente elección! 🏋🏻‍♀️\n\n" +
            "El proceso de pago se integrará posteriormente."
        );

    }, 300);

});


/* ---------- NAVBAR EN CELULAR ---------- */

const navLinks =
    document.querySelectorAll(".navbar-nav .nav-link");

const navbarCollapse =
    document.querySelector(".navbar-collapse");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            bsCollapse.hide();

        }

    });

});


/* ---------- MENSAJE EN CONSOLA ---------- */

console.log(
    "Rico Training Club - Aplicación web cargada correctamente."
);