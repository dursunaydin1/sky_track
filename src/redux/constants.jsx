export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "35.4",
    bl_lng: "26.9",
    tr_lat: "41.45",
    tr_lng: "43.51",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "6531794c49msh38dff0025c8d668p1c1dcdjsncfc3e0e62e8c",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
