const API_KEY = '9250bba0c9c7ad0f312fc3e44240eb9f';
const API_URI = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

export default httpClient => ({
  get: async ({ lat, lon }) => {
    const res = await httpClient(`${API_URI}&lat=${lat}&lon=${lon}`);
    return await res.json()
  },
})
