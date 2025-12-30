<script lang="ts">
	import Link from "$lib/components/Link.svelte";

	export let data: {
		references: {
			refs: string;
		};
	};
</script>

<div class="link">
	<Link href="/references">Références</Link>
</div>

{@html data.references.refs}

<style>
	.link {
		margin-bottom: 6rem;
		width: calc(50% - 0.5rem);
	}

	@media screen and (max-width: 950px) {
		.link {
			width: 100%;
			margin-bottom: 4rem;
		}
	}
</style>
