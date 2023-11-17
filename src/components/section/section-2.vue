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
    <section class="container">
        <div class="row">
            <div class="col-4">
                <h2 class="founder-title">
                    Hey there, my name is John Doe.I'm the founder
                    of the Brain Accademy.
                </h2>
                <figure class="signature">
                    <img src="/public/img/sign.jpg" alt="">
                </figure>
            </div>
            <div class="col-8">
                <p class="paragraph-founder">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ipsum sapiente deleniti facilis saepe
                    omnis vel veritatis unde architecto molestias, officiis veniam, vero quis quidem. Neque molestias
                    tempore eum necessitatibus hic ullam qui ipsum amet nulla laudantium recusandae, exercitationem
                    voluptate.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ipsum sapiente deleniti
                    facilis saepe
                    omnis vel veritatis unde architecto molestias, officiis veniam, vero quis quidem. Neque molestias
                    tempore eum necessitatibus hic ullam qui ipsum amet nulla laudantium recusandae, exercitationem
                    voluptate.
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.row {
    padding: 30px 0;
}

.col-4 {
    padding: 20px;

    .founder-title {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 10px;
        color: #2d4649;
    }

    .signature {
        text-align: center;

        img {
            width: 50%;

        }

    }
}

.col-8 {
    padding: 20px;

    .paragraph-founder {
        line-height: 25px;
    }
}

section {
    margin-top: 30px;
}
</style>
 