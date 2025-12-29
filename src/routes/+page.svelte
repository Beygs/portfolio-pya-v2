<script>
	import Card from "$lib/components/Card.svelte";
	export let data;
</script>

<div class="grid">
	{#each data.projects as project}
		<Card title={project.title} miniature={project.miniature} slug={project.slug} />
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}

	@media screen and (max-width: 500px) {
		.grid {
			display: block;
		}
	}
</style>
