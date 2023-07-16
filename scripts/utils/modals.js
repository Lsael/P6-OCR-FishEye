
const getContactModal = async (id) => {
    const { name } =  await getPhotographer(id)
    return getContactModalTemplate(name)
}

const displayContactModal = () => {
    const modal = document.querySelector(".contact-modal");
	modal.showModal()
}

const getLightBoxModal = async (id) => {
    const { name } =  await getPhotographer(id)
    return getLightBoxModalTemplate(name)
}

const displayLightBoxModal = (index) => {
    const modal = document.querySelector(".lightbox-modal");
	modal.showModal()
}

const closeModal = () => {
    const modals = document.querySelectorAll(".modals");
    modals.forEach(modal => modal.close())
}

(async () => {
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('id')
    const contactModal = await getContactModal(id)

    document.querySelector(".contact-modal").innerHTML = contactModal
})()