import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {getArticle} from '../../service/articleService';
import Progress from '../progress';
import FullWidthCenter from '../fullWidthCenter';
import ListGroup from '../listGroup';
import Button from '../button';
import Modal from '../modal';
import {deleteArticle} from '../../service/articleService';
import { useNavigate } from "react-router-dom";


const Article = () => {

    const [article, setArticle] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [isModalDelete, setShowModalDelete] = useState(false);
    const { idArticle } = useParams();
    const navigate = useNavigate();

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
                <FullWidthCenter key={par.id}>
                    {getParagraph(par)}
                </FullWidthCenter>
            ) ;

            return <div key={article.id}>
                    <FullWidthCenter>{title}</FullWidthCenter>
                    {paragraphList}
                </div>
        }
    }

    const getModalDelete = () => {
        return isModalDelete ?  <Modal isOpen={isModalDelete} setOpen={setShowModalDelete}
                                               headerText="Warning!"
                                               modalText="This Article will be deleted."
                                               optBtnText={"Delete"}
                                               optOnClick={()=>{deleteArticle(idArticle).then(() => navigate("/home"));}}
                                               optBtnTextStyle={"btn-danger"}/> : '';
    }

    return (
        <div>
            {getArticleComp()}
            {getModalDelete()}
            <Button text={"Edit"} btnStyle={"btn-warning"} onClick={()=> navigate(`/edit-article/${idArticle}`)}/>
            <Button text={"Delete"} btnStyle={"btn-danger"} onClick={()=> setShowModalDelete(true)}/>
        </div>
    )
}

export default Article;