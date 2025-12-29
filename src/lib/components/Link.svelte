<script>
	import { page } from "$app/state";
	let {
		href = undefined,
		target = "",
		rel = "",
		children,
		dispatch = undefined,
		classlist = []
	} = $props();
</script>

{#if !href}
	<button onclick={() => dispatch && dispatch()} class={[...classlist]}>
		{@render children()}
	</button>
{:else}
	<a
		{href}
		{target}
		{rel}
		class={[page.url.pathname === href && "active", ...classlist]}
		onclick={() => dispatch && dispatch()}
	>
		{@render children()}
	</a>
{/if}

<style>
	a,
	button {
		color: var(--dark);
		background: var(--light);
		text-align: center;
		border: 1px solid var(--dark);
		min-width: fit-content;
		width: 100%;
		height: 100%;
		min-height: 3rem;
		transition: all 0.2s ease;
		padding: 0 1rem;

		@media not all and (pointer: coarse) {
			&:hover {
				color: var(--light);
				background: var(--dark);
			}
		}
	}

	.active {
		color: var(--light);
		background: var(--accent);
		border-color: var(--accent);
		pointer-events: none;
		cursor: default;
	}

	.inversed {
		color: var(--light);
		background: var(--dark);
	}
</style>
