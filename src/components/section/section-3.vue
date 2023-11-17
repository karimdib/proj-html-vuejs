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
    <section>
        <div class="container">
            <h2 class="title-section">New Courses</h2>
            <div class="row">
                <div class="col-4 card">
                    <div class="background-card">
                        <figure class="img__card">
                            <img src="/public/img/dj.jpeg" alt="">
                            <p class="badge-special">SPECIAL</p>
                            <div class="cost">$59</div>
                            <div class="opacity"></div>
                        </figure>
                        <h6 class="courses-title">
                            How to be a DJ? Make Electronic Music
                        </h6>
                        <p class="type-courses">Electronic</p>
                        <div class="info-courses">
                            <div class="icon-courses">
                                <font-awesome-icon class="icon-cl" icon="signal" />
                                <span>Advanced</span>

                            </div>
                            <div class="icon-courses">
                                <font-awesome-icon class="icon-cl" icon="list-ul" />
                                <span>8 Lectures</span>
                            </div>
                            <div class="icon-courses">
                                <font-awesome-icon class="icon-cl" :icon="['far', 'clock']" />
                                <span>6 hours</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 card">
                    <figure class="img__card">
                        <img src="/public/img/nvidia-g.png" alt="">
                        <p class="badge-special">SPECIAL</p>
                        <div class="cost">$59</div>
                        <div class="opacity"></div>
                    </figure>
                    <h6 class="courses-title">
                        Nvidia and UE4 Technologies Practice
                    </h6>
                    <p class="type-courses">Nvidia</p>
                    <div class="info-courses">
                        <div class="icon-courses">
                            <font-awesome-icon class="icon-cl" icon="signal" />
                            <span>Advanced</span>

                        </div>
                        <div class="icon-courses">
                            <font-awesome-icon class="icon-cl" icon="list-ul" />
                            <span>8 Lectures</span>
                        </div>
                        <div class="icon-courses">
                            <font-awesome-icon class="icon-cl" :icon="['far', 'clock']" />
                            <span>6 hours</span>
                        </div>
                    </div>
                </div>
                <div class="col-4 card">
                    <figure class="img__card">
                        <img src="/public/img/fashion.jpeg" alt="">
                        <div class="cost">$59</div>
                        <div class="opacity"></div>
                    </figure>
                    <h6 class="courses-title">
                        Fashion Photography from professional
                    </h6>
                    <p class="type-courses">Fashion</p>
                    <div class="info-courses">
                        <div class="icon-courses">
                            <font-awesome-icon class="icon-cl" icon="signal" />
                            <span>Advanced</span>

                        </div>
                        <div class="icon-courses">
                            <font-awesome-icon class="icon-cl" icon="list-ul" />
                            <span>8 Lectures</span>
                        </div>
                        <div class="icon-courses">
                            <font-awesome-icon class="icon-cl" :icon="['far', 'clock']" />
                            <span>6 hours</span>
                        </div>
                    </div>
                </div>
                <div class="col-4 card">
                    <figure class="img__card">
                        <img src="/public/img/design.jpeg" alt="">
                        <div class="cost">$59</div>
                        <div class="opacity"></div>
                    </figure>
                    <h6 class="courses-title">
                        Design Instruments for Communication
                    </h6>
                    <p class="type-courses">Communication</p>
                    <div class="info-courses">
                        <div class="icon-courses">
                            <font-awesome-icon class="icon-cl" icon="signal" />
                            <span>Intermediate</span>

                        </div>
                        <div class="icon-courses">
                            <font-awesome-icon class="icon-cl" icon="list-ul" />
                            <span>6 Lectures</span>
                        </div>
                        <div class="icon-courses">
                            <font-awesome-icon class="icon-cl" :icon="['far', 'clock']" />
                            <span>6 hours</span>
                        </div>
                    </div>
                </div>
                <div class="col-4 card">
                    <figure class="img__card">
                        <img src="/public/img/art.jpg" alt="">
                        <div class="cost">$59</div>
                        <div class="opacity"></div>
                    </figure>
                    <h6 class="courses-title">
                        Make your Concept Right and Beatiful
                    </h6>
                    <p class="type-courses">Art</p>
                    <div class="info-courses">
                        <div class="icon-courses">
                            <font-awesome-icon class="icon-cl" icon="signal" />
                            <span>Intermediate</span>

                        </div>
                        <div class="icon-courses">
                            <font-awesome-icon class="icon-cl" icon="list-ul" />
                            <span>6 Lectures</span>
                        </div>
                        <div class="icon-courses">
                            <font-awesome-icon class="icon-cl" :icon="['far', 'clock']" />
                            <span>6 hours</span>
                        </div>
                    </div>
                </div>
                <div class="col-4 card">
                    <figure class="img__card">
                        <img src="/public/img/bicycle.jpeg" alt="">
                        <div class="cost">$59</div>
                        <div class="opacity"></div>
                    </figure>
                    <h6 class="courses-title">
                        Road Bike Manual or How to Be a Champion.
                    </h6>
                    <p class="type-courses">Bicycling</p>
                    <div class="info-courses">
                        <div class="icon-courses">
                            <font-awesome-icon class="icon-cl" icon="signal" />
                            <span>Intermediate</span>

                        </div>
                        <div class="icon-courses">
                            <font-awesome-icon class="icon-cl" icon="list-ul" />
                            <span>6 Lectures</span>
                        </div>
                        <div class="icon-courses">
                            <font-awesome-icon class="icon-cl" :icon="['far', 'clock']" />
                            <span>6 hours</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="center-button">
                <div class="button">
                    Load More
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: #edf2f5;
    padding: 20px;
}

.courses-title {
    margin: 20px 0;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: #2d4649;
}

.title-section {
    margin: 20px 0;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    color: #2d4649;
}

.cost {
    position: absolute;
    color: white;
    font-size: 20px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    display: none;
}

.opacity {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0;
    display: none;
}

.card {
    background-color: white;
    margin-right: 10px;
    margin-bottom: 10px;

    &:hover {
        .cost {
            display: block;
        }

        .opacity {
            display: block;
        }
    }

    .courses-title {
        font-weight: 700;
        margin-bottom: 10px;
    }

    .type-courses {
        color: grey;
        text-align: center;
        border-bottom: 1px solid gray;
        padding-bottom: 20px;
    }

    .info-courses {
        display: flex;
        padding: 10px;
        gap: 12px;

        span {
            color: #2d4649;
        }

        .icon-courses {
            font-size: 12px;

            .icon-cl {
                color: #f2b91e;
                padding-right: 4px;
            }
        }
    }
}

.center-button {
    display: flex;
    justify-content: center;

    .button {
        color: white;
        background-color: #f2b91e;
        padding: 10px;
        width: max-content;
        border-radius: 20px;
    }
}

.img__card {
    position: relative;

    .badge-special {
        font-size: 10px;
        position: absolute;
        background-color: #f09b23;
        border-radius: 4px;
        padding: 4px;
        color: white;
        right: 5px;
        top: 5px;
    }
}
</style>
