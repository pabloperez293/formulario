// Variables
const contactForm = document.getElementById("contactForm");

const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactDomicilio = document.getElementById("contactDomicilio");
const contactEdad = document.getElementById("contactEdad");
const contactDatos = document.getElementById("contactDatos");
const contactCelular = document.getElementById("contactCelular");

const contactMessage = document.getElementById("contactMessage");


// Correo 
const sendEmail = (evt) => {
    evt.preventDefault()

    if( contactName.value === '' || contactEmail.value === '' || contactDomicilio.value === ''|| contactEdad.value === '' || contactDatos.value ===  '' || contactCelular.value ===  ''){

// Agregamos y removes avisos
        contactMessage.classList.remove('color-blue');
        contactMessage.classList.add('color-red');

// mensaje de noticias 
    contactMessage.textContent = "Tiene que rellenar todos los campos ";
    }else{

// serviceID , templateId, #form , publickey
        emailjs.sendForm('service_i97z35p','template_9lm2tbs','#contactForm','ADGl8lPMJrgzUqeEo')
        .then(() => {
            contactMessage.classList.add("color-blue");
            contactMessage.textContent = "mensaje enviado"

// Remover mensaje viejo
            setTimeout(( ) => {
                contactMessage.textContent = ""
            }, 5000)
        }, (error) => {
            alert("Algo ocurrio en el envio ", error)
        })

// Borrado de inputs
        contactName.value = ""
        contactEmail.value = ""
        contactDomicilio.value = ""
        contactEdad.value = ""
        contactDatos.value = ""
        contactCelular.value = ""
    }
}

contactForm.addEventListener("submit", sendEmail)

