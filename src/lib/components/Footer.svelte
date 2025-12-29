<script>
	import Link from "./Link.svelte";
</script>

<footer>
	<nav class="socials">
		<ul>
			<li>
				<Link href="mailto:pyagilles04@gmail.com">pyagilles04@gmail.com</Link>
			</li>
			<li>
				<Link href="https://www.instagram.com/pyagilles_" target="_blank" rel="noopener noreferrer"
					>pyagilles_</Link
				>
			</li>
		</ul>
	</nav>

	<p>
		Made with <em>{"<"}3</em> by Boris Gilles - 2025
	</p>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-bottom: 1rem;
	}
	.socials {
		width: clamp(10vw, 100%, 20vw);
		margin-bottom: 3rem;
	}

	ul {
		list-style: none;
	}

	li {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		margin: 0.5rem;
	}

	em {
		font-style: normal;
		color: var(--accent);
	}

	p {
		text-align: center;
	}
</style>
