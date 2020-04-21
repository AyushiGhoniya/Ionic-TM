export interface IPost {
    content: string,
    postImage: string,
    postName: string,
    timestamp: number,
    likes: number,
    category?: string
}