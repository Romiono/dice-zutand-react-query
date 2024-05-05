interface IPost {
    id: string,
    title: string,
    description?: string,
    tags?: string[],
    author: string,
    text?: string,
    likes: number,
    comments?: comment[],
}

interface comment {
    id: string,
    author: string,
    text: string,
    likes: number,
}