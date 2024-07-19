import React from 'react'
import { useSelector } from 'react-redux'

// 機能として別なのでPostsListコンポーネントとは分ける
export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  // storeから必要最小限の情報を取得する
  // 存在しない場合はオブジェクトの代わりにundefinedを返却する
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId),
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
      </article>
    </section>
  )
}
