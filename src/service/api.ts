import axios from 'axios';

export interface userItem {
    id: number;
    username: string;
    password: string;
    email: string;
    created_at: string;
    // 根据你的表结构添加其他字段
}
export interface postItem {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;

}
export interface commentItem {
    id: number;
    post_id?: number;
    content: string;
    created_at: string;
    updated_at: string;
}

export async function getUsers() {
    const response = await axios.get<userItem[]>('http://localhost:3000/api/users');
    return response.data;
}
  
export async function getPosts() {
    const response = await axios.get<postItem[]>('http://localhost:3000/api/posts');
    return response.data;
}
export async function getComments() {
    const response = await axios.get<postItem[]>('http://localhost:3000/api/comments');
    return response.data;
}
export const deleteCommentById = async (commentId: number) => {
    await axios.delete(`http://localhost:3000/api/comments/${commentId}`);
};