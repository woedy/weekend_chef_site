import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  server: {
    host: '0.0.0.0', // This allows the server to be accessible from outside the container
    port: 7000, // Make sure the port matches what you're mapping in docker-compose
  },
=======

  server: {
    port: 3000, // Change to your desired port
  },
  

>>>>>>> c7c184b2bc4fe9c61a0def55ea0378bb70f47b20
})

