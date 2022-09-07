import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export const useUploadImage = async (file: File, path: string) => {
  const firestorage = getStorage()
  const imageRef = ref(firestorage, `images/${path}/${encodeURI(file.name)}`)
  const downloadUrl = await uploadBytes(imageRef, file).then(() => {
    const url = getDownloadURL(imageRef)
    return url
  })
  return downloadUrl
}
