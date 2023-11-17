<script>

export default {

    data() {
        return {
            menu: [
                {
                    text: 'Courses'
                },
                {
                    text: 'Course Formats'
                },
                {
                    text: 'Add Course',
                    old: 'NEW'
                },
                {
                    text: 'Pages'
                },
                {
                    text: 'Demons'
                }
            ]
        }
    }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="row justify-between align-center">
                <figure>
                    <img src="/public/img/MasterStudy-1.svg" alt="">
                </figure>
                <div class="nav">
                    <div>
                        <ul class="menu-nav">
                            <li v-for="(item, i) in     menu    " :key="i">{{ item.text }}
                            </li>
                            <span class=" red">{{ menu[2].old }}</span>
                        </ul>
                    </div>
                    <figure>
                        <img class="logo-social" src="/public/img/facebook.png" alt="">
                        <img class="logo-social" src="/public/img/linkedin.png" alt="">
                        <img class="logo-social" src="/public/img/twitter.png" alt="">
                        <img class="logo-social" src="/public/img/instagram.png" alt="">
                    </figure>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    padding: 30px 0;
}

.logo-social {
    width: 20px;
    margin-right: 10px;
}

.nav {
    display: flex;

    div {
        padding: 0px 10px;
    }
}

.menu-nav {
    display: flex;
    gap: 10px;

    li {
        font-size: 17px;
        font-weight: bold;
    }
}

.red {
    background-color: red;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 8px;
    padding: 3px;
    position: relative;
    right: 150px;
    top: -20px;

}
</style>
