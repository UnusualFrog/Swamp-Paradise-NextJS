import Image from 'next/image';
import Link from 'next/link'



export default function GalleryImg(data) {

    const href = "/gallery/" + data.img_data.name
    return (
        <Link href={href} key={data.img_data.ID}>
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
        </Link>

    )
}