<script>
	import { page } from '$app/state';
	let { href, children } = $props();
</script>

<a {href} class={`${page.url.pathname}` === href ? 'active' : ''}>{@render children()}</a>

<style>
	a {
		color: var(--dark);
		text-align: center;
		border: 1px solid var(--dark);
		width: 100%;
		height: 100%;
		min-height: 3rem;
		transition: 0.2s ease;
    padding: 0 1rem;

		&:hover {
			color: var(--light);
			background: var(--dark);
		}
	}

	.active {
		color: var(--light);
		background: var(--accent);
    border-color: var(--accent);
    pointer-events: none;
    cursor: default;
	}
</style>
