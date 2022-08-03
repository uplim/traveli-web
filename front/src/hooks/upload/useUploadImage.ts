import { useState } from 'react'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useBoolean } from '@chakra-ui/react'

export const useUploadImage = () => {
  const [image, setImage] = useState<string>('')
  const [imageFile, setImageFile] = useState<File | null>()
  const [isImageChanged, setIsChanged] = useBoolean()

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
      const url = URL.createObjectURL(e.target.files[0])
      setImage(url)
      setImageFile(e.target.files[0])
      setIsChanged.on()
    }
  }

  return {
    uploadImage,
    image,
    imageFile,
    handleChangeImage,
    isImageChanged
  }
}
