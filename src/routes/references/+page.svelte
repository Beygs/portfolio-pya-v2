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

<div class="content">
	{@html data.references.refs}
</div>

<style>
	.link {
		margin-bottom: 6rem;
		width: calc(50% - 0.5rem);
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	:global(.content img, .content video) {
		max-width: 100%;
		height: auto;
	}

	:global(.content iframe) {
		max-width: 100%;
		height: auto;
		border: 0;
		display: block;
		aspect-ratio: 16 / 9;
	}

	/* YouTube / Vimeo – horizontal */
	:global(.content iframe[src*="youtube"]),
	:global(.content iframe[src*="youtu.be"]),
	:global(.content iframe[src*="vimeo"]) {
		aspect-ratio: 16 / 9;
	}

	/* Vidéos verticales (Shorts, Reels, TikTok…) */
	:global(.content iframe[src*="short"]),
	:global(.content iframe[src*="reel"]),
	:global(.content iframe[src*="tiktok"]) {
		aspect-ratio: 9 / 16;
	}

	/* Formats spéciaux via data-attribute */
	:global(.content iframe[data-ratio="21-9"]) {
		aspect-ratio: 21 / 9;
	}

	@media screen and (max-width: 950px) {
		.link {
			width: 100%;
			margin-bottom: 4rem;
		}
	}
</style>
