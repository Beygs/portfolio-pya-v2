<script>
	import Link from "./Link.svelte";
</script>

<header>
  <nav class="title">
    <a href="/" aria-label="Retourner à l'accueil">
      <h1>Pya <span class="gilles">GILLES</span></h1>
    </a>
  </nav>
  <nav class="nav">
    <ul>
      <li>
        <Link href="/documents">
          Documents d'archives semestrielles sous influence textuelle.
        </Link>
      </li>
      <li>
        <Link href="/cv">
          CV.
        </Link>
      </li>
      <li>
        <Link href="/mention-marginale">
          Mention Marginale&nbsp;:&nbsp;Néant
        </Link>
      </li>
      <li>
        <Link href="/interprete">
          Interprète.
        </Link>
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
      transition: 0.2s ease;
    }

    &:hover {
      .gilles {
        color: var(--accent);
      }
    }
  }

  .nav {
    width: 100%;

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
  }

  @media screen and (max-width: 1050px) {
    header {
      flex-direction: column;
      align-items: center;
    }

    .title {
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 635px) {
    .title {
      h1 {
        text-align: center;
        font-size: 3rem;
      }
    }
  }
</style>
