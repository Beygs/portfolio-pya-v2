<script lang="ts">
	let { src, alt = "" } = $props();

	let loaded = $state(false);
</script>

<div class="image-modal">
	{#if !loaded}
		<div class="spinner"></div>
	{/if}
	<picture>
		<source type="image/avif" srcset={src} />
		<source type="image/webp" srcset={src} />
		<img {src} {alt} onload={() => (loaded = true)} />
	</picture>
</div>

<style>
	.image-modal {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			max-width: 90vw;
			max-height: 90vh;
			object-fit: contain;
			display: block;
		}
	}

	.spinner {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 3rem;
		height: 3rem;
		margin-left: -1.5rem;
		margin-top: -1.5rem;
		border: 4px solid rgba(255, 255, 255, 0.3);
		border-top-color: white;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		z-index: 10;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
