import GalleryImg from '../components/gallery_img'

function splitThree(arr) {
    let split_1 = Math.ceil(arr.length / 3);
    let split_2 = split_1 * 2;

    return [arr.slice(0,split_1), arr.slice(split_1, split_2), arr.slice(split_2, arr.length)]
}

export default function GalleryGrid({ data, is_group }) {

    const grouped_data = splitThree(data);

    return (
        <div className='tower-gallery-grid'>
            <div className='tower-gallery-grid-col'>
            {
                grouped_data[0].map((obj, i) => (
                    <GalleryImg img_data={obj} is_group={is_group} key={i}></GalleryImg>
                ))
            }
        </div>
        <div className='tower-gallery-grid-col'>
            {
                grouped_data[1].map((obj, i) => (
                    <GalleryImg img_data={obj} is_group={is_group} key={i}></GalleryImg>
                ))
            }
        </div>
        <div className='tower-gallery-grid-col'>
            { grouped_data[2] &&
                grouped_data[2].map((obj, i) => (
                    <GalleryImg img_data={obj} is_group={is_group} key={i}></GalleryImg>
                ))
            }
        </div>
        </div>
        
    )
}