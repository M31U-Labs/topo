import type { APIRoute } from "astro";

const getCoords = (
  minLong: string | number,
  minLat: string | number,
  maxLong: string | number,
  maxLat: string | number
) => {
  return `https://api.buntinglabs.com/v1/contour-lines?bbox=${minLong},${minLat},${maxLong},${maxLat}`;
};

export const get: APIRoute = async ({ url : { searchParams } }) => {
    console.log(getCoords(
        searchParams.get("minLong") || 0,
        searchParams.get("minLat") || 0,
        searchParams.get("maxLong") || 0,
        searchParams.get("maxLat") || 0
      ))
    const apiResult = await fetch(
    getCoords(
      searchParams.get('minLong')|| 0,
      searchParams.get('minLat') || 0,
      searchParams.get('maxLong')|| 0,
      searchParams.get('maxLat')|| 0
    )
  );
  const svg = await apiResult.text();

  return new Response(svg, { status: 200 });
};
