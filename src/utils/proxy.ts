import axios from "axios";

function setProxy(api: string) {
  const proxyConfig = {
    "/api": {
      target: api,
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  };

  axios.defaults.baseURL = proxyConfig["/api"].target;
}

export { setProxy };
