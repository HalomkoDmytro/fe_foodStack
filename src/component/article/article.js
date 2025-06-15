import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {getArticle} from '../../service/articleService';
import Progress from '../progress';
import FullWidthCenter from '../fullWidthCenter';
import ListGroup from '../listGroup';


const Article = () => {

    const [article, setArticle] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const { idArticle } = useParams();
    useEffect(() => {
        getArticle(idArticle).then(res => {
            setArticle(res);
            setLoading(false);
        });
    }, []);

    const getParagraph = (par) => {
        switch (par.type) {
            case "TEXT":
                return <div key={par.id}>{par.data}</div>
            case "PICTURE":
                return <div><img key={par.id} src={par.data} alt="Img should be here" style={{ height: '300px' }}/></div>
            case "LIST_GROUPS":
                return <ListGroup key={par.id} data={par.data}/>
            default:
                return ''
        }
    }

    const getArticleComp = () => {
        if(isLoading) {
            return <Progress color={"BLUE"}/>
        }
        if (article) {
            const title = article.title ? <h1>{article.title}</h1> : '';
            const paragraphList = !article.paragraph ? '' : article.paragraph.map(par =>
                <div key={par.id}>
                    {getParagraph(par)}
                </div>
            ) ;

            return <div key={article.id}>
                    {title}
                    {paragraphList}
                </div>
        }
    }

    return (
        <FullWidthCenter>{getArticleComp()}</FullWidthCenter>
    )
}

export default Article;