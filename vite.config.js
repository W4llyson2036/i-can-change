import { defineConfig } from "vite";

export default defineConfig({
    root: "src",
    base: "./",

    // plugins: [
    //     {
    //         name: "playing",
    //         configureServer(server) {
    //             server.middlewares.use((req,res, next) => {
    //                 console.log(req);
    //             })
    //         }
    //     }
    // ]
})