
const getContactFormDatas = () => {
    const firstName = document.querySelector("#contact-firstname").value
    const lastName = document.querySelector("#contact-lastname").value
    const email = document.querySelector("#contact-email").value
    const message = document.querySelector("#contact-message").value

    const contactFormDatas = {
        firstname:firstName,
        lastname:lastName,
        email:email,
        message:message
    }

    return contactFormDatas
  }

const submitContactForm = () => {
    console.log(getContactFormDatas())
    closeModal()
}