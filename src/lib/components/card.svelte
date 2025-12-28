<script>
	import { PUBLIC_APIURL } from "$env/static/public";

  let { title, miniature, slug } = $props();
</script>

<div class="card">
  <a href="/{slug}">
    <div class="miniature">
      <img src="{PUBLIC_APIURL}/assets/{miniature}" alt="{title} miniature">
    </div>
    <p>{title}</p>
  </a>
</div>

<style>
  .card {
    margin-bottom: 2rem;

    &:hover {
      .miniature img {
        transform: scale(1.1);
      }
    }
  }

  a {
    color: var(--dark);
  }

  .miniature {
    position: relative;
    aspect-ratio: 4/3;
    margin-bottom: 0.5rem;
    overflow: hidden;

    img {
      aspect-ratio: 4/3;
      object-fit: cover;
      transition: 0.5s ease;
    }
  }
</style>