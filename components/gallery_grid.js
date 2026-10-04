import GalleryImg from '../components/gallery_img'

export default function GalleryGrid({ data }) {

    return (
        <div className='tower-gallery-grid'>
            {
                data.map((obj, i) => (
                    <GalleryImg img_data={obj} key={i}></GalleryImg>
                ))
            }
        </div>
    )
}