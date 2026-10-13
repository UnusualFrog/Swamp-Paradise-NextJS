import GalleryImg from '../components/gallery_img'



export default function GalleryGrid({ data, is_group }) {

    return (
        <div className='tower-gallery-grid'>
            {
                data.map((obj, i) => (
                    <GalleryImg img_data={obj} is_group={is_group} key={i}></GalleryImg>
                ))
            }
        </div>
    )
}