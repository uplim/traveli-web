import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export const useUploadImage = async (file: File) => {
  const firestorage = getStorage()
  const imageRef = ref(firestorage, `images/users/${encodeURI(file.name)}`)
  const downloadUrl = await uploadBytes(imageRef, file).then(() => {
    const url = getDownloadURL(imageRef)
    return url
  })
  return downloadUrl
}
