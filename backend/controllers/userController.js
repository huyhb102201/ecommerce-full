// controllers/userController.js
const db = require('../db');

const saveUser = (req, res) => {
  const { name, email, photoURL, uid } = req.body;

  // 1. Kiểm tra email đã tồn tại
  const checkSql = "SELECT * FROM users WHERE email = ?";
  db.query(checkSql, [email], (checkErr, checkResult) => {
    if (checkErr) {
      console.error("❌ Lỗi kiểm tra email:", checkErr);
      return res.status(500).send("Lỗi kiểm tra user");
    }

    if (checkResult.length > 0) {
      // Người dùng đã tồn tại → không insert
      return res.status(200).send("ℹ️ User đã tồn tại");
    }

    // 2. Chưa tồn tại → tiến hành insert
    const insertSql = "INSERT INTO users (name, email, photo_url, firebase_uid) VALUES (?, ?, ?, ?)";
    db.query(insertSql, [name, email, photoURL, uid], (insertErr, result) => {
      if (insertErr) {
        console.error("❌ Lỗi khi lưu:", insertErr);
        return res.status(500).send("Lỗi lưu user");
      }
      res.send("✅ Lưu thành công");
    });
  });
};

module.exports = { saveUser };
