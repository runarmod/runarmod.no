<script>
    /** @type {{name: any, link: any, img: any, description: any}} */
    let { name, link, img, description } = $props();

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
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: min(30px, 10vw);
        aspect-ratio: 500 / 545;
        max-width: 500px;
        width: 100%;
        height: 100%;
        border-radius: 4%;
        overflow: hidden;
    }

    .img-container {
        width: 100%;
        height: 100%;
        aspect-ratio: 500 / 275;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .text-container {
        background-color: var(--background-shade);
        color: var(--text);
        width: 100%;
        height: 100%;
        overflow: auto;
        transition:
            color 0.5s,
            background-color 0.5s;
    }

    h2,
    p {
        margin: min(30px, 5vw);
    }

    @media screen and (max-width: 500px) {
        h2 {
            font-size: 6.4vw;
            text-align: center;
        }

        p {
            font-size: 3.84vw;
        }
    }

    @media screen and (min-width: 501px) {
        h2 {
            font-size: 2rem;
            text-align: center;
        }

        p {
            font-size: 1.2rem;
        }
    }

    a {
        text-decoration: none;
        transition: transform 0.5s ease;
    }

    a:hover,
    a:focus {
        transform: scale(1.1);
        box-shadow: 0 0 11px var(--text);
        transition:
            transform 0.5s ease,
            box-shadow 0.25s ease;
    }
</style>
