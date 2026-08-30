"use strict";


/* ==============================
   CURRENT YEAR
============================== */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* ==============================
   MOBILE NAVIGATION
============================== */

const menuButton =
    document.querySelector(".menu-toggle");

const navigation =
    document.querySelector(".main-nav");


if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        const isOpen =
            navigation.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    /* Close menu after selecting a link */

    navigation
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });

}


/* ==============================
   CONTACT FORM
============================== */

const contactForm =
    document.getElementById("contact-form");

const formStatus =
    document.getElementById("form-status");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name");

            const email =
                document.getElementById("email");

            const subject =
                document.getElementById("subject");

            const message =
                document.getElementById("message");


            let valid = true;


            /* Reset previous errors */

            [
                name,
                email,
                subject,
                message
            ].forEach(function (field) {

                field.removeAttribute("aria-invalid");

            });


            /* Name validation */

            if (name.value.trim().length < 2) {

                name.setAttribute(
                    "aria-invalid",
                    "true"
                );

                valid = false;
            }


            /* Email validation */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email.value.trim())) {

                email.setAttribute(
                    "aria-invalid",
                    "true"
                );

                valid = false;
            }


            /* Subject validation */

            if (subject.value.trim().length < 3) {

                subject.setAttribute(
                    "aria-invalid",
                    "true"
                );

                valid = false;
            }


            /* Message validation */

            if (message.value.trim().length < 10) {

                message.setAttribute(
                    "aria-invalid",
                    "true"
                );

                valid = false;
            }


            if (!valid) {

                formStatus.textContent =
                    "Please correct the highlighted fields and try again.";

                formStatus.setAttribute(
                    "role",
                    "alert"
                );

                return;
            }


            /*
             * Demo submission.
             *
             * A backend/email service can be connected later.
             */

            formStatus.textContent =
                "Thank you! Your message has been validated successfully.";

            formStatus.setAttribute(
                "role",
                "status"
            );


            contactForm.reset();

        }
    );

}