<script>

export default {
    props: {
        items: {
            type: Object,
        },
        contacts: {
            type: Object,
        },
        pages: {
            type: Object,
        },
        blogs: {
            type: Object,
        },
    },
    data() {
        return {
        }
    }
}

</script>
<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="" v-for="(item, i) in items.abouts" :key="i">
                        <h4 class="title-list">{{ item.title }}</h4>
                        <ul>
                            <li>
                                {{ item.text }}
                            </li>
                        </ul>
                    </div>
                    <figure>
                        <img class="logo-social" src="/public/img/facebook.png" alt="">
                        <img class="logo-social" src="/public/img/linkedin.png" alt="">
                        <img class="logo-social" src="/public/img/twitter.png" alt="">
                        <img class="logo-social" src="/public/img/instagram.png" alt="">
                    </figure>
                </div>
                <div class="col-3">
                    <div class="" v-for="(item, i) in items.contacts" :key="i">
                        <h4 class="title-list">{{ item.title }}</h4>
                        <ul>
                            <li>{{ item.text }}</li>
                        </ul>
                    </div>
                </div>
                <div class="col-3">
                    <div class="" v-for="(item, i) in items.pages" :key="i">
                        <h4 class="title-list">{{ item.title }}</h4>
                        <div class="seconda">
                            <ul>
                                <li>{{ item.textLeft }}</li>
                                <li>{{ item.textRight }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="" v-for="(item, i) in items.blogs" :key="i">
                        <h4 class="title-list">{{ item.title }}</h4>
                        <div id="prova">
                            <figure>
                                <img class="img-footer" :src="item.img" alt="">
                            </figure>
                            <ul>
                                <li>{{ item.text }}</li>
                                <li class="date">{{ item.date }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: #f2b91e;
    padding: 40px;
    width: 100%;
}

.col-3 {
    padding-right: 10px;

    li {
        font-size: 14px;
    }
}


.title-list {
    margin-bottom: 15px;
    font-size: 20px;
    color: #2d4649;
}

#seconda {
    display: flex;
}

#prova {
    display: flex;
    gap: 10px;

    .img-footer {
        width: 60px;
        object-fit: cover;
    }
}

.logo-social {
    width: 20px;
    margin-right: 10px;
    margin-top: 10px;
}

.date {
    color: gray;
}
</style>