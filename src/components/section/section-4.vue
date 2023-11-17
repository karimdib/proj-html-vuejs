<script>

export default {

    data() {
        return {
            message: 'bella'
        }
    }
}
</script>

<template>
    <section class="section-four">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <h3 class="book-title">
                        Get My Exclusive Investing Book
                        just for $19.50
                    </h3>
                    <p class="book-paragraph">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum commodi quidem ea ullam
                        temporibus sapiente, doloremque provident perspiciatis consequatur?
                    </p>
                    <a class="button-amazon" href="">
                        <img src="/public/img/amazon.png" alt="">
                    </a>
                </div>
                <div class="col-6">
                    <figure class="book-img">
                        <img src="/public/img/book.png" alt="">
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-four {
    background-image: url(/public/img/bg-section.jpg);
    margin: 50px 0;
    padding-top: 30px;
}

.col-6 {

    .book-img {
        text-align: center;
        width: 300px;


        img {
            display: block;
        }
    }

    text-align: center;

    .book-title {
        font-size: 30px;
        color: #f2b91e;
        margin: 20px 0;

    }

    .book-paragraph {
        color: white;
        line-height: 24px;
        margin-bottom: 20px;
        font-style: italic;
    }

    .button-amazon {
        img {
            width: 145px;
            margin-bottom: 20px;
        }
    }
}
</style>
