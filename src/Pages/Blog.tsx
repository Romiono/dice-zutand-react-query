import Post from "../components /Post.tsx";

const Blog = () => {

    const Posts: IPost[] = [
        {
            id: 'lorem10',
            title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam consequuntur corporis cum doloremque ducimus eligendi, excepturi hic modi, necessitatibus placeat provident quam quod repellat rerum sequi tenetur voluptas voluptatum! Accusantium, cum delectus eaque facilis illum quas recusandae temporibus veritatis.`,
            tags: ['Java', 'Python', 'C++', 'JavaScript', 'Ruby', 'Go', 'Swift', 'Rust', 'PHP', 'Perl', 'Haskell', 'Scala', 'Lua', 'Kotlin', 'Objective-C', 'TypeScript', 'R', 'MATLAB', 'Fortran', 'COBOL', 'Assembly', 'VB.NET', 'Delphi', 'Pascal', 'Lisp'],
            author: 'Romashka',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi assumenda dolorem facere perspiciatis quas, reiciendis sit sunt ut. Aut fuga in iste itaque modi nobis officiis quae quas quasi`,
            likes: 15,
            comments: [
                {id: 'lorem1', author: 'tugrik', text: '{Lorem ipsum dolor sit amet', likes: 3},
                {id: 'lorem2', author: 'katy', text: '{Lorem ipsum dolor sit amet', likes: 3},
                {id: 'lorem3', author: 'sofa', text: '{Lorem ipsum dolor sit amet', likes: 3},
            ]
        },
        {
            id: 'lorem11',
            title: 'post1',
            tags: ['ts', 'js'],
            author: 'Romashka',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi assumenda dolorem facere perspiciatis quas, reiciendis sit sunt ut. Aut fuga in iste itaque modi nobis officiis quae quas quasi`,
            likes: 15,
            comments: [
                {id: 'lorem4', author: 'tugrik', text: '{Lorem ipsum dolor sit amet', likes: 3},
                {id: 'lorem5', author: 'katy', text: '{Lorem ipsum dolor sit amet', likes: 3},
                {id: 'lorem6', author: 'sofa', text: '{Lorem ipsum dolor sit amet', likes: 3},
            ]
        },
        {
            id: 'lorem12',
            title: 'post1',
            tags: [],
            author: 'Romashka',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi assumenda dolorem facere perspiciatis quas, reiciendis sit sunt ut. Aut fuga in iste itaque modi nobis officiis quae quas quasi`,
            likes: 15,
            comments: [
                {id: 'lorem7', author: 'tugrik', text: '{Lorem ipsum dolor sit amet', likes: 3},
                {id: 'lorem8', author: 'katy', text: '{Lorem ipsum dolor sit amet', likes: 3},
                {id: 'lorem9', author: 'sofa', text: '{Lorem ipsum dolor sit amet', likes: 3},
            ]
        },

    ]

    return (
        <div className={'w-full container flex flex-col items-center justify-center'}>
            {Posts.map((post) => <Post key={post.id} tags={post.tags} author={post.author} id={post.id} likes={post.likes} title={post.title} description={post.description}/>)}
        </div>
    );
};

export default Blog;