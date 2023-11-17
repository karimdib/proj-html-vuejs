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
    <section class="section-five">
        <div class="container">
            <h2 class="why-my-course-title">Why my Courses?</h2>
            <div class="row">
                <div class="col-6 why-card-course">
                    <div class="row">
                        <div class="col-2">
                            <font-awesome-icon class="card-icon" icon="briefcase" />
                        </div>
                        <div class="col-10">
                            <h3 class="card-title">Entrepreneurship</h3>
                            <p class="card-paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                                amet ipsam obcaecatiullam impedit enim voluptates velit et accusamus suscipit?
                                amet ipsam obcaecati ullam impedit enim voluptates velit et accusamus suscipit?
                            </p>
                        </div>
                    </div>
                    <div class="yellow"></div>
                </div>
                <div class="col-6 why-card-course">
                    <div class="row">
                        <div class="col-2">
                            <font-awesome-icon class="card-icon" icon="rocket" />
                        </div>
                        <div class="col-10">
                            <h3 class="card-title">Accelerated learning</h3>
                            <p class="card-paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                                amet ipsam obcaecatiullam impedit enim voluptates velit et accusamus suscipit?
                                amet ipsam obcaecati ullam impedit enim voluptates velit et accusamus suscipit?
                            </p>
                        </div>
                    </div>
                    <div class="yellow"></div>
                </div>
                <div class="col-6 why-card-course">
                    <div class="row">
                        <div class="col-2">
                            <font-awesome-icon class="card-icon" :icon="['far', 'thumbs-up']" />
                        </div>
                        <div class="col-10">
                            <h3 class="card-title">Producivity</h3>
                            <p class="card-paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                                amet ipsam obcaecatiullam impedit enim voluptates velit et accusamus suscipit?
                                amet ipsam obcaecati ullam impedit enim voluptates velit et accusamus suscipit?
                            </p>
                        </div>
                    </div>
                    <div class="yellow"></div>
                </div>
                <div class="col-6 why-card-course">
                    <div class="row">
                        <div class="col-2">
                            <font-awesome-icon class="card-icon" icon="gear" />
                        </div>
                        <div class="col-10">
                            <h3 class="card-title">Life Coaching</h3>
                            <p class="card-paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                                amet ipsam obcaecatiullam impedit enim voluptates velit et accusamus suscipit?
                                amet ipsam obcaecati ullam impedit enim voluptates velit et accusamus suscipit?
                            </p>
                        </div>
                    </div>
                    <div class="yellow"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.col-6 {
    margin-right: 15px;
    margin-bottom: 15px;
    box-shadow: 0 0 4px #000;
}

.why-card-course {
    padding: 20px;
    position: relative;

    &:hover {
        background-color: #f2b91e;

        .card-icon {
            color: white;
        }
    }
}

.card-icon {
    color: #f2b91e;
    font-size: 40px;
}

.why-my-course-title {
    text-align: center;
    margin-bottom: 40px;
    font-weight: bold;
}

.card-title {
    font-size: 22px;
}

.card-paragraph {
    line-height: 22px;
    padding: 20px 0;
}

.yellow {
    position: absolute;
    background-color: #f2b91e;
    height: 100%;
    left: 0;
    top: 0;
    width: 5px;
}
</style>
