<script>

export default {

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
                <div class="">
                    <h2 class="feedback-title">
                        What Students Say
                    </h2>
                    <div class="col-12 feedback--img">
                        <div><img class="img__feedback" src="/public/img/men-1.jpg" alt=""></div>
                        <div>
                            <img class="img__feedback big-img" src="/public/img/men-2.jpg" alt="">
                        </div>
                        <div><img class="img__feedback" src="/public/img/girl.jpg" alt=""></div>
                        <div><font-awesome-icon class="icon-right" icon="arrow-right" /></div>
                        <div><font-awesome-icon class="icon-left" icon="arrow-left" /></div>
                        <div class="star__feedback">
                            <h3>
                                Paints of the Future
                            </h3>
                            <div class="icon-star">
                                <font-awesome-icon icon="star" />
                                <font-awesome-icon icon="star" />
                                <font-awesome-icon icon="star" />
                                <font-awesome-icon icon="star" />
                                <font-awesome-icon icon="star" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="feedback__description">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis fugit optio quo dolorum magni
                            voluptate tenetur praesentium ipsam dolore nostrum voluptates aliquam quod mollitia adipisci,
                            dolores maiores quasi! Vero fuga, rem ea labore perspiciatis sed voluptatem in repudiandae
                            pariatur a maxime numquam impedit corporis iste animi tenetur magni distinctio dolorem voluptas
                            modi adipisci sequi libero error? Esse impedit voluptatem porro atque dolor, qui, nisi
                            voluptates alias sapiente saepe nam ratione harum. Ipsum impedit numquam perferendis omnis? Hic
                            impedit exercitationem voluptates?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    margin-bottom: 60px;
}

.star__feedback {
    align-self: flex-end;
    font-size: 16px;
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    color: #2d4649;

}

.feedback--img {
    padding: 30px 0;
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.feedback-title {
    font-size: 35px;
    text-align: center;
}

.img__feedback {
    object-fit: cover;
    border-radius: 50%;
    width: 70px;
}

.big-img {
    width: 100px;
    margin: 0px 10px;
}

.feedback__description {
    line-height: 25px;
    text-align: center;
}

.col-12 {
    position: relative;

    .icon-left {
        position: absolute;
        left: 50px;
    }

    .icon-right {
        position: absolute;
        right: 50px;
    }
}

.icon-star {
    text-align: center;
    color: #f2b91e;
}

.icon-star>* {
    padding-right: 4px;
}
</style>
