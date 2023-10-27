import { getSortedPostsData } from "../lib/posts";

const URL = "https://www.fernandobereza.tech";

export default async function sitemap() {
    const posts = getSortedPostsData.map(({ id, date }) => ({
        url: `${URL}/blog/${id}`,
        lastModified: date,
    }));

    const routes = ["/ServerRender", "/ClientRender", "/StaticRender"].map((route) => ({
        url: `${URL}${route}`,
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...posts];
}