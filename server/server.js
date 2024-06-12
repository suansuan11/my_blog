const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// 创建数据库连接
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Dio',
  password: 'Liuyi325',
  database: 'my_blog',
});

connection.connect((err) => {
  if (err) {
    console.error('数据库连接失败：', err);
    return;
  }
  console.log('数据库连接成功！');
});

// 获取用户数据的 API
app.get('/api/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('获取数据失败：', err);
      res.status(500).send('服务器错误');
      return;
    }
    res.json(results);
  });
});
// 获取文章数据的 API
app.get('/api/posts', (req, res) => {
  const sql = 'SELECT * FROM posts';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('获取文章数据失败：', err);
      res.status(500).send('服务器错误');
      return;
    }
    res.json(results);
  });
});
app.get('/api/comments', (req, res) => {
  const sql = 'SELECT * FROM comments';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('获取评论数据失败：', err);
      res.status(500).send('服务器错误');
      return;
    }
    res.json(results);
  });
});

app.delete('/api/comments/:id', (req, res) => {
  const commentId = req.params.id;
  const sql = 'DELETE FROM comments WHERE id = ?';
  connection.query(sql, [commentId], (err, result) => {
    if (err) {
      console.error('删除评论失败：', err);
      res.status(500).send('服务器错误');
      return;
    }
    res.json({ message: '评论删除成功' });
  });
});


app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});
