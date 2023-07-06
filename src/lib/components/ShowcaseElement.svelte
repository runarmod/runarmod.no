<script>
    export let name;
    export let link;
    export let img;
    export let description;

    let imageRef = `/images/projects/${img}`;
</script>

<a href={link} class="container">
    <div class="img-container">
        <img src={imageRef} alt={name} />
    </div>
    <div class="text-container">
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
</a>

<style>
    * {
        margin: 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        height: 545px;
        width: 500px;
        border-radius: 20px;
    }

    .img-container {
        width: 500px;
        height: 275px;
    }

    img {
        border-radius: 20px 20px 0px 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .text-container {
        color: #faf6ef;
        width: 100%;
        height: 270px;
        top: 275px;
        background-color: #0e1129;
        border-radius: 0px 0px 20px 20px;
    }

    h2,
    p {
        margin: 30px;
    }

    h2 {
        font-size: 2rem;
        text-align: center;
    }

    p {
        font-size: 1.2rem;
    }

    a {
        text-decoration: none;
    }
</style>
