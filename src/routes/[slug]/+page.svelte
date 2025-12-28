<script>
	import { PUBLIC_APIURL } from '$env/static/public';

  export let data;

  const { project } = data;

  console.log(project);
  
</script>

<h2 class="title">{project.title}</h2>

<p class="creation">{project.creation}</p>

<ul class="images">
  <li>
    <img src="{PUBLIC_APIURL}/assets/{project.miniature}" alt="{project.title} illustration 1">
  </li>
  {#each project.images as image, i}
    <li>
      <img src="{PUBLIC_APIURL}/assets/{image.directus_files_id}" alt="{project.title} illustration {i + 2}">
    </li>
  {/each}
</ul>

<p class="techniques">{project.techniques}</p>

<p class="dimensions">{project.dimensions}</p>

{#if project.credits}
  <h3>Crédits</h3>

  <p class="credits">{@html project.credits}</p>
{/if}

<style>
  * {
    text-align: center;
    text-transform: uppercase;
  }

  h2, h3 {
    font-weight: bold;
  }

  .title, .creation, .dimensions, .images {
    margin-bottom: 3rem;
  }

  .images {
    list-style: none;
  }

  .credits {
    margin-bottom: 9rem;
    text-transform: none;
  }

  .images {
    column-count: 2;
    column-gap: 1rem;
  }

  .images img {
    margin-bottom: 1rem;
  }
</style>
