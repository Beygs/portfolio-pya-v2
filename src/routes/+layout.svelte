<script lang="ts">
	import "../styles/main.scss";
	import Header from "../lib/components/Header.svelte";
	import Footer from "../lib/components/Footer.svelte";

	let { children } = $props();
</script>

<a href="#main" class="skip-link">
	Aller au contenu
</a>

<Header />

<main id="main">
	{@render children()}
</main>

<Footer />

<style>
	.skip-link {
		position: absolute;
		top: -100%;
		left: -100%;
		color: var(--dark);
		background: var(--light);
		padding: 0.5rem 1rem;
		margin: 1rem;
	}

	.skip-link:focus {
		top: 0;
		left: 0;
	}

	main {
		margin-bottom: 5rem;
	}
</style>
