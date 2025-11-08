export default async function getResourceFromStrapi<T>(
  resourceName: string,
  hasImage = false,
): Promise<T> {
  const res = await fetch(
    `https://rational-prize-6776b6794b.strapiapp.com/api/${resourceName}${
      hasImage ? '?populate=*' : ''
    }`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    throw new Error(`Error fetching ${resourceName}: ${res.statusText}`);
  }

  const { data } = await res.json();
  return data;
}
