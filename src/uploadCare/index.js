import { uploadFile } from '@uploadcare/upload-client'

// fileData must be `Blob`, `File`, `Buffer`, UUID, CDN URL or Remote URL
const result = await uploadFile(fileData, {
  publicKey: import.meta.env.VITE_API_UPLOADCARE ?? process.env.VITE_API_UPLOADCARE,
  store: 'auto',
})

console.log(`URL: ${file.cdnUrl}`)