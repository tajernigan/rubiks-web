import { defineConfig } from "vite";

export default defineConfig({
    server: {
        host: "0.0.0.0",
        port: 8080,

        proxy: {
            "/api": {
                target: "http://server:8081",
                rewrite: (path) => path.replace(/^\/api/, "")
            }
        }
    }
});