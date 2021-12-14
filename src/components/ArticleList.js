import React from "react";
import App from "./App";
import Article from "./Article";

function ArticleList(props) {

     const postElements = props.posts.map( post => {
         return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
     })
    return (
        <main>
            {postElements}
        </main>
    )
}

export default ArticleList;