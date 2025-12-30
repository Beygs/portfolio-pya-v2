import getDirectusInstance from "$lib/directus";
import { readItems } from "@directus/sdk";

export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);

	try {
		const projects = await directus.request(
			readItems("projects", { filter: { status: "published", interprete: "false" }, sort: "index" })
		);

		return {
			projects
		};
	} catch (e) {
		console.error(e);
	}
}
