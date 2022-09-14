import { defineStore } from 'pinia';

export const useMainStore = defineStore('MainStore', {
    state: () => {
        return {
            windowWidth: null,
            windowHeight: null,
            // pageHeight: 0,
            scrollPos: 0,
            showModal: false,
            modalContent: null,
            showMessage: false,
            modalMessage: '',
        }
    },
    actions: {
        openModal(content) {
            this.showModal = true
            this.modalContent = content
        },
        openMessageModal(message) {
            this.showMessage = true
            this.modalMessage = message
        },
        closeModal() {
            this.showModal = false
            this.modalContent = null
        },
        closeMessageModal() {
            this.showMessage = false
            this.modalMessage = ''
        },
        closeModalOnEscape(e) {
            if (e.keyCode == 27) {
                if (this.showMessage) {
                    this.closeMessageModal();
                } else if (this.showModal) {
                    this.closeModal();
                }
            }
        },
        closeOnOutsideClick(e) {
            if (e.target.classList.contains('modal-container')) {
                if (this.showMessage) {
                    this.closeMessageModal();
                } else if (this.showModal) {
                    this.closeModal();
                }
            }
        },
        openLink(link) {
            if (link !== "") {
                window.open(link, "_blank");
            } else {
                this.mainStore.openMessageModal(
                    "I'm sorry Dave, I'm afraid I can't do that."
                );
            }
        },
        getPositionOnScroll() {
            this.scrollPos = window.top.scrollY;
            /* or: e.target.documentElement.scrollTop */
        },
        test() {
            console.log('poop')
        }
    },
})