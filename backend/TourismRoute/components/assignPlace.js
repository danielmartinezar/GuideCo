export default function assignPlace(url, TABLE, axios) {
  const URL_DATABASE_SERVICE = url;
  async function get(id) {
    return await axios.get(URL_DATABASE_SERVICE + `/${TABLE}/${id}`);
  }
  function insert(idRoute,places) {
    Promise.allSettled(
      places.map(async (place) => {
        const assignedPlace = {
          idLugar: place.id,
          idRuta: idRoute,
        };
        await axios.post(
          URL_DATABASE_SERVICE + `/${TABLE}`,
          assignedPlace
        )
      })
    );
  }
  async function update(body) {
    const route = { ...body };
    return await axios.put(URL_DATABASE_SERVICE + `/${TABLE}`, route);
  }
  async function del(id) {
    return await axios.delete(URL_DATABASE_SERVICE + `/${TABLE}/${id}`);
  }
  return { get, update, insert, del };
}
