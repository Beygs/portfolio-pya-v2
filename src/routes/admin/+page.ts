import { PUBLIC_APIURL } from "$env/static/public";
import { redirect } from "@sveltejs/kit";

export async function load() {
	return redirect(308, `${PUBLIC_APIURL}/admin/content/projects`);
}
