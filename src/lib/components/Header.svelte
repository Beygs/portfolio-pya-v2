<script>
	import { page } from "$app/state";
	import Link from "./Link.svelte";

	let mobileMenuActive = $state(false);
</script>

<header>
	<nav class="title">
		<a href="/" aria-label="Retourner à l'accueil" onclick={() => (mobileMenuActive = false)}>
			<h1>Pya <span class="gilles">GILLES</span></h1>
		</a>
	</nav>
	<nav class="nav">
		<ul>
			<li class="mobile-menu">
				<Link
					dispatch={() => (mobileMenuActive = !mobileMenuActive)}
					classlist={[mobileMenuActive && "inversed"]}>Menu</Link
				>
			</li>
			<li
				class={["nav-link", (mobileMenuActive || page.url.pathname === "/documents") && "active"]}
			>
				<Link href="/documents" dispatch={() => (mobileMenuActive = false)}
					>Documents d'archives semestrielles sous influence textuelle.</Link
				>
			</li>
			<li class={["nav-link", (mobileMenuActive || page.url.pathname === "/cv") && "active"]}>
				<Link href="/cv" dispatch={() => (mobileMenuActive = false)}>CV.</Link>
			</li>
			<li
				class={[
					"nav-link",
					(mobileMenuActive || page.url.pathname === "/mention-marginale") && "active"
				]}
			>
				<Link href="/mention-marginale" dispatch={() => (mobileMenuActive = false)}
					>Mention Marginale&nbsp;:&nbsp;Néant</Link
				>
			</li>
			<li
				class={["nav-link", (mobileMenuActive || page.url.pathname === "/interprete") && "active"]}
			>
				<Link href="/interprete" dispatch={() => (mobileMenuActive = false)}>Interprète.</Link>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 2rem 0;
		margin-bottom: 5rem;
		flex-direction: column;
	}

	.title {
		position: relative;
		margin-bottom: 6rem;

		.gilles {
			transition: color 0.2s ease;
		}

		@media not all and (pointer: coarse) {
			&:hover {
				.gilles {
					color: var(--accent);
				}
			}
		}

		&:active {
			.gilles {
				color: var(--accent);
			}
		}
	}

	h1 {
		font-size: 6rem;
	}

	.mobile-menu {
		display: none;
	}

	.nav {
		width: 100%;
	}

	ul {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}

	li {
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}

	@media screen and (max-width: 950px) {
		ul {
			position: relative;
			display: block;
		}

		.mobile-menu {
			display: block;
		}

		.nav-link {
			width: 100%;
			opacity: 0;
			pointer-events: none;
			transition: all 0.2s ease;
			height: auto;
			max-height: 0;
			overflow: hidden;
		}

		.active {
			max-height: fit-content;
			opacity: 1;
			pointer-events: all;
			margin-top: 1rem;
		}

		h1 {
			font-size: 3rem;
		}

		.title {
			margin-bottom: 3rem;
		}

		header {
			margin-bottom: 2rem;
		}
	}

	@media screen and (max-width: 350px) {
		h1 {
			font-size: 2rem;
		}

		.title {
			margin-bottom: 2rem;
		}

		header {
			margin-bottom: 1rem;
		}
	}
</style>
