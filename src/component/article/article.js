import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticle, deleteArticle } from '../../service/articleService';
import { hasRole } from '../../service/loginService';
import Progress from '../progress';
import FullWidthCenter from '../fullWidthCenter';
import ListGroup from '../listGroup';
import Button from '../button';
import Modal from '../modal';

const Article = () => {
    const [article, setArticle] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [isEditor, setEditor] = useState(false);
    const [isModalDelete, setShowModalDelete] = useState(false);

    const { idArticle } = useParams();
    const navigate = useNavigate();

    const handleDelete = useCallback(async () => {
        try {
            await deleteArticle(idArticle);
            navigate("/home");
        } catch (error) {
            console.error('Error deleting article:', error);
        }
    }, [idArticle, navigate]);

    const handleEdit = useCallback(() => {
        navigate(`/edit-article/${idArticle}`);
    }, [idArticle, navigate]);

    const handleShowDeleteModal = useCallback(() => {
        setShowModalDelete(true);
    }, []);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const res = await getArticle(idArticle);
                setArticle(res);
            } catch (error) {
                console.error('Error fetching article:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
        setEditor(hasRole('ROLE_ADMIN'));
    }, [idArticle]);

    // Render paragraph based on type
    const renderParagraph = (par) => {
        switch (par.type) {
            case "TEXT":
                return <div key={par.id}>{par.data}</div>;
            case "PICTURE":
                return (
                    <div key={par.id}>
                        <img
                            src={par.data}
                            alt="Article content"
                            style={{ height: '300px' }}
                        />
                    </div>
                );
            case "LIST_GROUPS":
                return <ListGroup key={par.id} data={par.data} />;
            default:
                return null;
        }
    };

    // Loading state
    if (isLoading) {
        return <Progress color="BLUE" />;
    }

    // No article found
    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div>
            <div key={article.id}>
                {article.title && (
                    <FullWidthCenter>
                        <h1>{article.title}</h1>
                    </FullWidthCenter>
                )}

                {article.paragraph?.map(par => (
                    <FullWidthCenter key={par.id}>
                        {renderParagraph(par)}
                    </FullWidthCenter>
                ))}
            </div>

            {/* Delete Confirmation Modal */}
            {isModalDelete && (
                <Modal
                    isOpen={isModalDelete}
                    setOpen={setShowModalDelete}
                    headerText="Warning!"
                    modalText="This Article will be deleted."
                    optBtnText="Delete"
                    optOnClick={handleDelete}
                    optBtnTextStyle="btn-danger"
                />
            )}

            {/* Editor Actions */}
            {isEditor && (
                <div>
                    <Button
                        text="Edit"
                        btnStyle="btn-warning"
                        onClick={handleEdit}
                    />
                    <Button
                        text="Delete"
                        btnStyle="btn-danger"
                        onClick={handleShowDeleteModal}
                    />
                </div>
            )}
        </div>
    );
};

export default Article;