<script lang="ts">
  type Props = {
    src: string;
    alt?: string;
  };

  let { src, alt = "" }: Props = $props();

  let container = $state<HTMLElement | null>(null);
  let width = $state<number>(0);
  let inViewport = $state<boolean>(false);

  const BREAKPOINTS = [200, 400, 600, 800, 1600];

  const srcSetDefault = $derived(() =>
    BREAKPOINTS.map((w) => `${src}?width=${w} ${w}w`).join(", ")
  );

  const srcSetAvif = $derived(() =>
    BREAKPOINTS.map((w) => `${src}?format=avif&width=${w} ${w}w`).join(", ")
  );

  const srcSetWebp = $derived(() =>
    BREAKPOINTS.map((w) => `${src}?format=webp&width=${w} ${w}w`).join(", ")
  );

  // ResizeObserver → calcule la largeur réelle
  $effect(() => {
    if (!container || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver((entries) => {
      width = Math.round(entries[0].contentRect.width);
    });

    observer.observe(container);
    return () => observer.disconnect();
  });

  // IntersectionObserver + test initial (above-the-fold)
  $effect(() => {
    if (!container || typeof IntersectionObserver === "undefined") return;

    const rect = container.getBoundingClientRect();
    // Si l'image est visible au chargement, on la considère above-the-fold
    if (rect.top < window.innerHeight + 200) {
      inViewport = true;
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          inViewport = true;
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    io.observe(container);
    return () => io.disconnect();
  });
</script>

<div class="image" bind:this={container}>
  <picture>
    <source type="image/avif" sizes={`${width}px`} srcset={srcSetAvif()} />
    <source type="image/webp" sizes={`${width}px`} srcset={srcSetWebp()} />

    <img
      src={src}
      srcset={srcSetDefault()}
      sizes={`${width}px`}
      alt={alt}
      loading={inViewport ? "eager" : "lazy"}
      fetchpriority={inViewport ? "high" : "auto"}
      decoding="async"
    />
  </picture>
</div>

<style>
  .image {
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
