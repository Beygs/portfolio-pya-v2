import { error } from '@sveltejs/kit';
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

export async function load({ fetch, params }) {
	const directus = getDirectusInstance(fetch);
  
	try {
		const projects = await directus.request(
			readItems('projects', {
        filter: { slug: params.slug },
        fields: ["*", "images.*"]
      })
		);

		const project = projects[0];

    if (!project) {
      throw error;
    }

		return {
			project
		};
	} catch (err) {
		throw error(404, 'Page not found');
	}
}
