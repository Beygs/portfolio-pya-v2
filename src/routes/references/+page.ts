import getDirectusInstance from "$lib/directus";
import { readItems } from "@directus/sdk";

export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);

	try {
		const references = await directus.request(readItems("references"));

		return {
			references
		};
	} catch (e) {
		console.error(e);
	}
}
