## Firebase Auth Demo
参考文档：[firebase.auth.Auth](https://firebase.google.com/docs/reference/js/firebase.auth.Auth)

---

### 在本地部署 firebase

- 参考：[Add Firebase to your JavaScript project](https://firebase.google.com/docs/web/setup?authuser=0#from-the-cdn)

### Auth 应用接口

- 用户注册：```createUserWithEmailAndPassword```
- 用户登录：```signInWithEmailAndPassword```
- 用户登出：```signOut```
- 监听用户状态变化：```onAuthStateChanged```

### Store 应用接口

- 参考：[Get started with Cloud Firestore](https://firebase.google.com/docs/firestore/quickstart?authuser=0)
- 获取数据库内容
  ```
  db
    .collection('COLLECTION_NAME')
    .get()
    .then(snapshot => {
      console.log(snapshot);
      snapshot
        .docs
        .forEach(item => {
          console.log(item.data());
        })
    })
    .catch(error => {

    })
  ```
- 编写数据库安全规则
  - [Structuring Cloud Firestore Security Rules](https://firebase.google.com/docs/firestore/security/rules-structure)
  - [Writing conditions for Cloud Firestore Security Rules](https://firebase.google.com/docs/firestore/security/rules-conditions)
- 向数据库中写入数据
  ```
    db
      .collection('guides')
      .add({
        title,
        content
      })
      .then(docRef => {
        console.log(docRef);
      })
      .catch(error => {
        console.log(erorr);
      })
  ```
