<script>

export default {

    data() {
        return {
        }
    }
}
</script>

<template>
    <div>
        <section class="first-section">
            <div class="title-first-section">
                <h2>
                    Start your Human <span class="color-title">Revolution</span> today
                </h2>
                <p class="paragraph-first-section">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nulla libero optio culpa laudantium
                    iusto
                    facilis voluptates fuga.
                </p>
            </div>
            <div>
                <div class="newsletter">
                    <div class="col-6 ">
                        <h2><span class="sale">Limited Sale:</span>All courses with 55% off</h2>
                        <div class="col-newsletter">
                            <input class="input-newsletter" type="text" placeholder="Enter your Email">
                            <span class="input-button">SUBSCRIBE</span>
                        </div>
                    </div>
                    <div class="col-6 expiration">
                        <div class="col-3">
                            <div class="time-expiration-number">26</div>
                            <p class="time-expiration-words">Days</p>
                        </div>
                        <div class="col-3">
                            <div class="time-expiration-number">01</div>
                            <p class="time-expiration-words">Hours</p>
                        </div>
                        <div class="col-3">
                            <div class="time-expiration-number">47</div>
                            <p class="time-expiration-words">Minutes</p>
                        </div>
                        <div class="col-3">
                            <div class="time-expiration-number">33</div>
                            <p class="time-expiration-words">Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<style lang="scss" scoped>
.first-section {
    background-image: url(/public/img/slide-1.jpg);
    background-size: cover;
    height: 500px;
    position: relative;

    .title-first-section {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 20px;


        .color-title {
            color: #f2b91e;
        }
    }

    .paragraph-first-section {
        line-height: 28px;
    }

    .newsletter {
        display: flex;
        gap: 20px;
        padding: 20px;
        background-color: #f2b91e;
        width: calc((100% / 12) * 8);
        position: absolute;
        right: 20%;
        bottom: -30px;
        border-radius: 5px;
    }

    .col-newsletter {
        display: flex;
    }

    .input-newsletter {
        padding: 5px;
        border-radius: 20px;
        border: 1px;
        padding: 7px;
        width: 100%;
        position: relative;
    }

    .input-button {
        padding: 10px;
        font-size: 10px;
        border-radius: 20px;
        color: white;
        background-color: #2d4649;
        position: absolute;
        left: 250px;
        bottom: 18px;
    }
}

.sale {
    color: white;
}

.expiration {
    display: flex;

    .time-expiration-number {
        color: white;
        font-size: 40px;
        font-weight: bold;
    }

    .time-expiration-words {
        font-weight: bold;
    }

}

.col-6 {
    h2 {
        font-size: 17px;
        padding: 10px 0;
    }
}
</style>
