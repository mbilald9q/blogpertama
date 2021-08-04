import PostMetaTitle from "@components/PostMetaTitle"
import PostAuthor from "@components/PostAuthor"
export default function InfoPost ({
    category,
    date,
    tittle,
    shortDescription,
    authorAvatar,
    authorName,
    authorJob
}){
    return (
    <>
        <PostMetaTitle 
        category={category}
        date={date}
        tittle={tittle} 
        />
        <p className="text-white/60 mt-4 w-10/12">
        {shortDescription}
        </p>
        <PostAuthor 
        authorName={authorName}
        authorJob={authorJob}
        authorAvatar={authorAvatar}
        />
    </>
    );
}