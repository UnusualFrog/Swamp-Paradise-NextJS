"use client"

import BlogPost from '../components/blog_post'

export default function BlogPostList({ data }) {

    return (
        <div>
            {
                data.map((obj, i) => (
                    <BlogPost key={i} blog_post_data={obj}></BlogPost>
                ))
            }
        </div>
    )
}