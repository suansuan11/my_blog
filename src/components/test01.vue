<template>
  <div id="post_list">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <small>{{ post.created_at }}</small>
      </li>
    </ul>
  </div>

  <div id="comment_list">
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <h3>{{ comment.id }}</h3>
        <p>{{ comment.content }}</p>
        <small>{{ comment.created_at }}</small>
        <button @click="deleteComment(comment.id)">删除评论</button>
      </li>
    </ul>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { getPosts, getComments, deleteCommentById } from '@/api';
import type { postItem, commentItem } from '@/api';

export default defineComponent({
  name: 'List',
  setup() {
    const posts = ref<postItem[]>([]);
    const comments = ref<commentItem[]>([]);

    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        posts.value = response;
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };
    const fetchComments = async () => {
      try {
        const response = await getComments();
        comments.value = response;
      } catch (error) {
        console.error('Failed to fetch comments:', error);
      }
    };
    const deleteComment = async (commentId: number) => {
      try {
        await deleteCommentById(commentId);
        comments.value = comments.value.filter(comment => comment.id !== commentId);
      } catch (error) {
        console.error('Failed to delete comment:', error);
      }
    };

    onMounted(fetchComments);
    onMounted(fetchPosts);

    return {
      posts,
      comments,
      deleteComment
    };
  }
});
</script>


<style>
  #post_list, #comment_list{
    color: rgb(0, 0, 0);
    background-color: rgb(25, 119, 202);
    border-radius: 5px;
    box-shadow: 0 0 10px black;
    padding: 20px;
  }
</style>