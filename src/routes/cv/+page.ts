import getDirectusInstance from "$lib/directus";
import { readItems } from '@directus/sdk';

export async function load({ fetch }) {
    const directus = getDirectusInstance(fetch);

    try {
      const cv = await directus.request(readItems("cv"));

      return {
          cv,
      };
    } catch (e) {
      console.error(e);
    }
}
