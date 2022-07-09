import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useState } from 'react'

export const useUploadImage = () => {
  const [image, setImage] = useState<File | null>()

  const uploadImage = (imageFile: File) => {
    const firestorage = getStorage()
    const imageRef = ref(firestorage, encodeURI(imageFile.name))
    const downloadUrl = uploadBytes(imageRef, imageFile).then(() => {
      const url = getDownloadURL(imageRef)
      return url
    })
    return downloadUrl
  }

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setImage(e.target.files[0])
    }
  }

  return {
    uploadImage,
    image,
    handleChangeImage
  }
}
