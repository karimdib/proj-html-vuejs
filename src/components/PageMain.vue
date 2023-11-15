<script>
import sectionOne from './section/section-1.vue'
import sectionTwo from './section/section-2.vue'
import sectionThree from './section/section-3.vue'
import sectionFour from './section/section-4.vue'
import sectionFive from './section/section-5.vue'
import sectionSix from './section/section-6.vue'
import sectionSeven from './section/section-7.vue'


export default {
    components: {
        sectionOne,
        sectionTwo,
        sectionThree,
        sectionFour,
        sectionFive,
        sectionSix,
        sectionSeven,
    },
    data() {
        return {
            message: 'come'
        }
    }
}
</script>

<template>
    <div>
        <div>{{ message }}</div>
        <sectionOne />
        <sectionTwo />
        <sectionThree />
        <sectionFour />
        <sectionFive />
        <sectionSix />
        <sectionSeven />

    </div>
</template>

<style></style>
