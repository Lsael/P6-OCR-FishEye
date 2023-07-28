
const getFormDatas = () => {
    const firstName = document.querySelector("#contact-firstname").value
    const lastName = document.querySelector("#contact-lastname").value
    const email = document.querySelector("#contact-email").value
    const message = document.querySelector("#contact-message").value

    const formDatas = {
        firstname:firstName,
        lastname:lastName,
        email:email,
        message:message
    }

    return formDatas
  }

const submitContactForm = () => {
    console.log(getFormDatas())
    closeModal()
}