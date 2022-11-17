import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

const CdnImage = () => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUDINARY
    }
  })

  const yourImage = cld.image('cld-sample-5')

  return (
    <>
      <AdvancedImage className='image' cldImg={yourImage} width={600} height={500}/>
    </>
  )
}

export default CdnImage
