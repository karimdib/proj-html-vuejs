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
    <section class="section-six">
        <div class="container">
            <div class="row ">
                <div class="col-3 data">
                    <div class="data__icon">
                        <font-awesome-icon icon="user-group" />
                    </div>
                    <div>
                        <div class="data__number">
                            3195
                            <div class="data__description">Online Learner</div>
                        </div>
                    </div>
                </div>
                <div class="col-3 data">
                    <div class="data__icon">
                        <font-awesome-icon icon="film" />
                    </div>
                    <div>
                        <div class="data__number">
                            23
                            <div class="data__description">Video Courses</div>
                        </div>
                    </div>
                </div>
                <div class="col-3 data">
                    <div class="data__icon">
                        <font-awesome-icon :icon="['far', 'image']" />
                    </div>
                    <div>
                        <div class="data__number">
                            437
                            <div class="data__description">Sliders & Images</div>
                        </div>
                    </div>
                </div>
                <div class="col-3 data">
                    <div class="data__icon">
                        <font-awesome-icon :icon="['far', 'thumbs-up']" />
                    </div>
                    <div>
                        <div class="data__number">
                            1440
                            <div class="data__description">Excellent Reviews</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-six {
    margin: 50px 0;
    background-image: url(/public/img/counter-person.jpg);
    background-size: cover;
    height: 400px;
    display: flex;
    align-items: center;

    .data {
        flex-basis: 0;
        display: flex;
        align-items: center;
        padding: 0 54px;
        gap: 5px;

        .data__icon {
            font-size: 40px;
            color: white;
        }

        .data__number {
            font-size: 30px;
            font-weight: bolder;
            color: #f2b91e;
        }

        .data__description {
            color: white;
            font-size: 8px;
        }
    }
}
</style>
