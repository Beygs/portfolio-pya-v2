<script lang="ts">
	import { PUBLIC_APIURL } from "$env/static/public";
	import Link from "$lib/components/Link.svelte";

  export let data: {
    cv: {
      image: string;
      pdf: string;
      portfolio: string;
    }
  };

  console.log(data.cv)
</script>

<Link href="{PUBLIC_APIURL}/assets/{data.cv.pdf}" target="_blank">PDF</Link>
<Link href="{PUBLIC_APIURL}/assets/{data.cv.portfolio}" target="_blank">Portfolio</Link>

<img src="{PUBLIC_APIURL}/assets/{data.cv.image}" alt="cv">

<style>
  img {
    margin-top: 1rem;
  }
</style>
