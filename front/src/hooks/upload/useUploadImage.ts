import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useState } from 'react'

export const useUploadImage = () => {
  const [downloadUrl, setDownloadUrl] = useState('')
  const [image, setImage] = useState<File | null>()

  const uploadImage = (imageFile: File) => {
    const firestorage = getStorage()
    const imageRef = ref(firestorage, encodeURI(imageFile.name))
    uploadBytes(imageRef, imageFile).then(() => {
      getDownloadURL(imageRef).then((url) => {
        setDownloadUrl(url)
      })
    })
  }

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setImage(e.target.files[0])
    }
  }

  return {
    uploadImage,
    downloadUrl,
    image,
    handleChangeImage
  }
}
