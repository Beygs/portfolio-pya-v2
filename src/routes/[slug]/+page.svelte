<script lang="ts">
	import { PUBLIC_APIURL } from "$env/static/public";
	import Image from "$lib/components/Image.svelte";
	import ImageModal from "$lib/components/ImageModal.svelte";
	import { ssrExportAllKey } from "vite/module-runner";

	export let data;

	const { project } = data;

	let modalImg = "https://admin.pya-gilles.fr/assets/ae3581f1-4fb4-4273-b329-224ef9ac818c";
	let showModal = false;

	const handleClick = (image: string) => {
		modalImg = `${PUBLIC_APIURL}/assets/${image}`;
		showModal = true;

		document.body.style = "overflow: hidden";
	};

	const exitModal = () => {
		showModal = false;

		document.body.style = "overflow: auto";
	};
</script>

<div class={[showModal && "active"]}>
	<button class="blocker" on:click={exitModal} title="exit modal"></button>
	<button on:click={exitModal} title="exit modal">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="800px"
			height="800px"
			viewBox="0 0 24 24"
			fill="none"
			class="cross"
		>
			<path
				d="M 20 20L4 4.00003M20 4L4.00002 20"
				stroke="#ffffffaa"
				stroke-width="2"
				stroke-linecap="round"
			/>
		</svg>
	</button>
	<div class="modal">
		{#key modalImg}
			<ImageModal src={modalImg} />
		{/key}
	</div>
</div>

<h2 class="title">{project.title}</h2>

<p class="creation">{project.creation}</p>

<ul class="images">
	<li>
		<button on:click={() => handleClick(project.miniature)}>
			<Image
				src="{PUBLIC_APIURL}/assets/{project.miniature}"
				alt="{project.title} illustration 1"
			/>
		</button>
	</li>
	{#each project.images as image, i}
		<li>
			<button on:click={() => handleClick(image.directus_files_id)}>
				<Image
					src="{PUBLIC_APIURL}/assets/{image.directus_files_id}"
					alt="{project.title} illustration {i + 2}"
				/>
			</button>
		</li>
	{/each}
</ul>

<p class="techniques">{project.techniques}</p>

<p class="dimensions">{project.dimensions}</p>

{#if project.credits}
	<h3>Crédits</h3>

	<p class="credits">{@html project.credits}</p>
{/if}

<style lang="scss">
	* {
		text-align: center;
		text-transform: uppercase;
	}

	h2,
	h3 {
		font-weight: bold;
	}

	.title,
	.creation,
	.dimensions,
	.images {
		margin-bottom: 3rem;
	}

	.images {
		list-style: none;
	}

	.credits {
		text-transform: none;
	}

	.images {
		column-count: 2;
		column-gap: 1rem;

		:global(img) {
			margin-bottom: 1rem;
		}
	}

	.images button {
		position: relative;
		z-index: 0;

		&::after {
			content: "";
			position: absolute;
			background: var(--accent);
			pointer-events: none;
			opacity: 0;
			top: 1rem;
			left: 1rem;
			right: 1rem;
			bottom: 2rem;
			transition: opacity 0.2s ease;
			filter: blur(15px);
		}

		&:hover {
			&::after {
				opacity: 0.05;
			}
		}
	}

	button {
		all: unset;
		display: block;
		width: 100%;
		cursor: pointer;
	}

	.blocker {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.8);
		pointer-events: none;
		z-index: 1;
	}

	.active {
		.blocker {
			opacity: 1;
			pointer-events: all;
		}

		.modal {
			transform: translate(-50%, -50%) scale(1);
			opacity: 1;
		}

		.cross {
			opacity: 1;
		}
	}

	.cross {
		position: fixed;
		width: 2rem;
		height: 2rem;
		right: 1rem;
		top: 1rem;
		cursor: pointer;
		opacity: 0;
		pointer-events: none;
		z-index: 1;
	}

	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transition: transform 0.5s ease;
		transform: translate(-50%, -50%) scale(0.9);
		opacity: 0;
		pointer-events: none;
		z-index: 1;
	}

	.blocker,
	.cross,
	.modal {
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	@media screen and (max-width: 950px) {
		.title,
		.creation,
		.dimensions,
		.images {
			margin-bottom: 1rem;
		}
	}

	@media screen and (max-width: 500px) {
		.images {
			column-count: 1;
		}
	}
</style>
