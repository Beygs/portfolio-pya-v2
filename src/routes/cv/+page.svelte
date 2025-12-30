<script lang="ts">
	import { PUBLIC_APIURL } from "$env/static/public";
	import Image from "$lib/components/Image.svelte";
	import Link from "$lib/components/Link.svelte";

	export let data: {
		cv: {
			image: string;
			pdf: string;
			portfolio: string;
		};
	};
</script>

<div class="link">
	<Link href="{PUBLIC_APIURL}/assets/{data.cv.portfolio}/portfolio-pya-gilles.pdf" target="_blank"
		>Portfolio</Link
	>
</div>

<a class="img" href="{PUBLIC_APIURL}/assets/{data.cv.pdf}/cv-pya-gilles.pdf" target="_blank">
	<Image src="{PUBLIC_APIURL}/assets/{data.cv.image}" alt="cv" />
</a>

<style>
	.link {
		width: calc(50% - 0.5rem);
		margin-bottom: 3rem;
	}

	.img {
		margin-top: 1rem;
	}

	@media screen and (max-width: 950px) {
		.link {
			width: 100%;
		}
	}
</style>
