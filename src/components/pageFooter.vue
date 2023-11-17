<script>
import listFooter from './listFooter.vue';

export default {
    components: {
        listFooter,
    },
    data() {
        return {
            footer: {
                abouts: [
                    {
                        title: 'ABOUT',
                    },
                    {
                        text: ' MasterdStudy is a education WordPress theme featured by learning',
                    },
                    {
                        text: 'MasterdStudy is a education WordPress theme featured by learning'
                    },
                    {
                        text: 'Developed by Stylemix',
                    },
                ],
                contacts: [
                    {
                        title: 'CONTACTS'
                    },
                    {
                        text: 'USA, California 20, First Avenue, California'
                    },
                    {
                        text: 'Tel: +1 111 111 111 11'
                    },
                    {
                        text: 'info@masterstudy.com'
                    },
                ],
                pages: [
                    {
                        title: 'PAGES'
                    },
                    {
                        textLeft: 'Blog'
                    },
                    {
                        textLeft: 'Home'
                    },
                    {
                        textLeft: 'Shortcodes'
                    },
                    {
                        textRight: 'Courses'
                    },
                    {
                        textRight: 'Membership'
                    },
                    {
                        textRight: 'Tipography'
                    },
                ],
                blogs: [
                    {
                        title: 'BLOGS',
                        img: '/public/img/photo.jpeg',
                        text: 'Our main target is to "Developing Yourself as a Leader" ',
                        date: '- August 9, 2018'

                    },
                    {
                        img: '/public/img/photo-2.jpeg',
                        text: 'Those Other College Expenses You Arent Thinking About',
                        date: '-June 3, 2015'
                    },
                ]
            }
        }
    }
}
</script>

<template>
    <div class="row">
        <listFooter :items="footer" />

    </div>
</template>

<style></style>
