import Image from 'next/image';


export default function GalleryImg(data) {

    console.log("In component: ", data)
    return (
        <div className='tower-gallery-grid-group group'>
            <Image
                src={data.img_data.src}
                width={250}
                height={250}
                alt={data.img_data.desc}
                className='tower-gallery-grid-img'
                loading='eager'
            ></Image>
            <div className='tower-gallery-grid-group-text-container hidden group-hover:block'>
                <p className='tower-gallery-grid-group-text '>{data.img_data.desc}</p>
            </div>
            


        </div>
    )
}