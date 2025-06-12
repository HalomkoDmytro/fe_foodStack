import React, {useState} from 'react';
import { useSelector } from 'react-redux';

const Article = () => {

    const article = useSelector((state) => state.article.data);

    const getParagraph = (par) => {
        switch (par.type) {
            case "TEXT":
                return <div key={par.id}>{par.data}</div>
            case "PICTURE":
                return <div><img key={par.id} src={par.data} alt="Img should be here" style={{ height: '300px' }}/></div>
            default:
                return ''
        }
    }

    const getArticle = () => {

        const title = article.title ? <h1>{article.title}</h1> : '';
        const paragraphList = !article.paragraph ? '' : article.paragraph.map(par =>
            <div key={par.id}>
                test tets test
                {getParagraph(par)}
            </div>
        ) ;

        return <div key={article.id}>
                {title}
                {paragraphList}
            </div>
    }

    console.log("this article: ", article);
    return (
        <div>{getArticle()}</div>
    )
}

export default Article;