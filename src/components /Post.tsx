import Line from "./UI/Line.tsx";
import Tag from "./UI/Tag.tsx";


const Post = ({title, tags, author, likes, description }: IPost) => {
    return (
        <div className={'py-2 m-2 w-full h-90 flex flex-col shadow rounded-2xl bg-neutral-100'}>
        {/*Название, теги, автор поста, кнопка редактировать пост(если авторизованный пользователь это автор поста)*/}
        {/*Содержание*/}
        {/*Лайки*/}
        {/*Комменты*/}
            <div className={'flex justify-between px-4 pb-2 font-bold'}>
                <h3 className={'text-xl text-neutral-700 '}>{title}</h3>
                <h4 className={'text-sm text-neutral-500 '}>By: {author}</h4>
            </div>
            <div className={'w-full flex justify-start px-4 pb-2'}>
                <h5 className={'text-neutral-700 flex gap-2 font-bold flex-wrap text-sm'}>tags: {tags?.length ? tags.map((tag) => <Tag tag={tag}/>) : 'none'}</h5>
            </div>
            <Line/>
            <div className={'flex justify-start py-2 px-4'}>
                <p className={'text-neutral-500 text-start font-bold'}>
                    {description ? description : 'None description :('}
                </p>
            </div>
            <div className={'px-4 flex justify-start items-center gap-1'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="#00ff1f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <p className={'text-green-500 font-bold '}>{likes}</p>
            </div>
        </div>
    );
};

export default Post;