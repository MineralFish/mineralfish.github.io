import type { LayoutLoad } from './$types';

export const prerender = true;
export const load = (async ({route}) => {
    return {route: route.id};
}) satisfies LayoutLoad;