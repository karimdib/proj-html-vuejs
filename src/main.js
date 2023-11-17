import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
    faSignal,
    faFilm,
    faBriefcase,
    faListUl,
    faRocket,
    faGear,
    faUserGroup,
    faArrowRight,
    faArrowLeft,
    faStar,
}

    from '@fortawesome/free-solid-svg-icons'

import { faClock, faThumbsUp, faImage, } from '@fortawesome/free-regular-svg-icons'


library.add(
    faSignal, faListUl, faClock, faBriefcase, faRocket, faThumbsUp, faGear,
    faUserGroup, faArrowRight, faArrowLeft, faStar, faClock, faBriefcase, faThumbsUp,
    faFilm, faImage

)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
