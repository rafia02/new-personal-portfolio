import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
})





// import { defineConfig } from "vite"

// export default defineConfig({
//     build: {
//         chunkSizeWarningLimit: 100000000
//     },
// })






// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/Stakepool-Frontend/",
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       "~": path.resolve(__dirname, "node_modules"),
//       "@": path.resolve(__dirname, "src"),
//     },
//   },
//   build: {
//     chunkSizeWarningLimit: 1600,
//   },
// });