import { defineStore } from 'pinia';
import gsap from "gsap";


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


            menuVisible: false,
            buttons: [
                {
                  name: "Hero",
                  href: "#hero",
                },
        
                {
                  name: "Projects",
                  href: "#projects",
                },
                {
                  name: "Message",
                  href: "#email-form",
                },
                {
                  name: "About",
                  href: "#about",
                },
                {
                  name: "FAQ",
                  href: "#faq",
                },
              ],
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
        },
        onClickOutside(event) {
            const menu = document.querySelector('.menu')
            if (menu && !menu.contains(event.target)) {
              this.toggleMenu()
            }
          },
        toggleMenu() {
            this.menuVisible = !this.menuVisible;

            if (this.menuVisible) {
              gsap.to('#hamb-bar-top', {
                transform: 'translate3D(0px, 16.5px, 0px) rotateZ(45deg)'
              })
              gsap.to('#hamb-bar-middle', {
                transform: 'rotateZ(45deg)'
              })
              gsap.to('#hamb-bar-bottom', {
                transform: 'translate3D(0px, -16.5px, 0px) rotateZ(-45deg)'
              })
              gsap.to('.hamb-bar', {
                backgroundColor: 'var(--mainYellow)'
              })
              window.addEventListener('click', this.onClickOutside)
            }
            else {
              gsap.to('#hamb-bar-top', {
                transform: 'translate3D(0px, 0px, 0px) rotateZ(0deg)'
              })
               gsap.to('#hamb-bar-middle', {
                transform: 'rotateZ(0deg)'
              })
               gsap.to('#hamb-bar-bottom', {
                transform: 'translate3D(0px, 0px, 0px) rotateZ(0deg)'
              })
              gsap.to('.hamb-bar', {
                backgroundColor: 'white'
              })
              window.removeEventListener('click', this.onClickOutside)
            }
          },
          enter(el) {
            el.style.transform = `translateY(-${el.dataset.index * 50 + 150}px)`;
          },
          afterEnter(el, done) {
            gsap.to(el, {
              transform: `translateY(${el.dataset.index * 50 + 70}px)`,
              delay: el.dataset.index * 0.2,
            });
          },
          onLeave(el, done) {
            //   console.log((this.buttons.length - el.dataset.index) * 0.2 - 0.2)
            gsap.to(el, {
              transform: `translateY(-${el.dataset.index * 50 + 150}px)`,
              delay: (this.buttons.length - el.dataset.index) * 0.2 - 0.2,
            // delay: el.dataset.index * 0.2, 
            // duration: 10, 
            // stagger: 1,
              onComplete: done,
            });
          },
    },
})