export default async function getResourceFromStrapi<T>(
  resourceName: string,
  hasImage: boolean,
): Promise<T> {
  const { data, error } = await fetch(
    `https://rational-prize-6776b6794b.strapiapp.com/api/${resourceName}${hasImage ? '?populate=*' : ''}`,
  ).then((res) => res.json());

  if (error) {
    throw new Error(
      `Error fetching ${resourceName}: ${error.message || error}`,
    );
  }

  return data;
}
