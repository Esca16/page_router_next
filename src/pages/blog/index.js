import Link from "next/link";

const Blog = () => {
    return (
        <div>
            Blog Home Page
            <Link href={"/blog/blog1"}>Blog1</Link>
        </div>
    );
}

export default Blog;