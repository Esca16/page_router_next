import { useRouter } from "next/router";

const ProjectDetails = () => {
    const router = useRouter()
    console.log(router.query)
    return (
        <div>
            Project Page {router.query.slug}
        </div>
    );
}

export default ProjectDetails;