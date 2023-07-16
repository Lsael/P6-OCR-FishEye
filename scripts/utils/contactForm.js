
const getContactModal = async (id) => {
    const { name } =  await getPhotographer(id)
    return getContactModalTemplate(name)
}

const displayModal = () => {
    const modal = document.getElementById("contact-modal");
	modal.style.display = "block";
}

const closeModal = () => {
    const modal = document.getElementById("contact-modal");
    modal.style.display = "none";
}

(async () => {
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('id')
    const contactModal = await getContactModal(id)

    document.getElementById("contact-modal").innerHTML = contactModal
})()