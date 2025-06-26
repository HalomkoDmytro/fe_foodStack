import React, {useState} from 'react';
import Select from '../select';
import Button from '../button';
import TextArea from '../textArea';
import EditArticleParagraph from '../editArticleParagraph';
import ChoseImg from '../choseImg';
import {createArticle} from '../../service/articleService';
import { useNavigate } from "react-router-dom";

const PARAGRAPH = {
    id: 0,
    order: 0,
    data: '',
    type: 'TEXT'
}

const CreateArticle = () => {

    const navigate = useNavigate();
    const [paragraphList, addParagraph] = useState([]);
    const [lastId, updateId] = useState(0);
    const [h1Title, updateH1Title] = useState('');
    const [coverImg, setCoveImg] = useState({});
    const [description, updateDescription] = useState('');
    const [theme, setTheme] = useState('');

    const addParagraphClick = () => {
        const newParagraph = {...PARAGRAPH};
        const maxOrder = paragraphList.length ? Math.max(...paragraphList.map(o => o.order)) : 0;
        updateId(id => id + 1);
        newParagraph.id = lastId;
        newParagraph.order = maxOrder + 1;
        addParagraph(prev => [...prev, newParagraph]);
    }

    const deleteParagraphClick = (id) => {
        addParagraph(prev => prev.filter((prev) => prev.id !== id));
    }

    const onAddBefore = (beforeOrderId) => {

        const newParagraph = {...PARAGRAPH};
        updateId(id => id + 1);
        newParagraph.id = lastId;
        newParagraph.order = beforeOrderId;

        paragraphList.forEach(prev => {
           if(prev.order === beforeOrderId) {
                prev.order = prev.order + 1;
           }
        } )

        addParagraph(prev => [...prev, newParagraph]);
    }

    const updateCoverImg = (src, id, file) => {
        setCoveImg({src, file});
    }

    const updateData = (data, id, file) => {
        paragraphList.forEach((prev) => {
                if(prev.id === id) {
                    prev.data = data;
                    if(file) {
                        prev.file = file
                    }
                }
            });
        addParagraph(paragraphList);
    }

    const updateElementType = (type, id) => {
          paragraphList.forEach((prev) => {
                  if(prev.id === id) {
                      prev.type = type
                  }
              });
          addParagraph(paragraphList);
    }

    const getListParagraphComponent = () => {
        if(paragraphList) {
            return paragraphList.sort((a, b) => a.order - b.order)
                .map(el => {
                    return <EditArticleParagraph
                        key={el.id}
                        id={el.id}
                        type={el.type}
                        data={el.data}
                        onDelete={() => deleteParagraphClick(el.id)}
                        onAddBefore={()=>onAddBefore(el.order)}
                        updateData={updateData}
                        updateElementType={updateElementType}
                    />
            })
        }
    }

    const onSaveClick = () => {
        createArticle({
            id: null,
            srcImg: coverImg.file,
            h1Title,
            theme,
            description,
            paragraphList
        });
        navigate("/home");
    }

    return (
        <div className="container">
            <div>
                <p>Choose img to display in Recipe Gallery:</p>
                <ChoseImg width={'300px'} height={'400px'}  onChangeInput={(url, id, img) => updateCoverImg(url, id, img)} source={coverImg.src}/>
            </div>
            <TextArea labelText="Title:" initValue={h1Title} onChangeInput={updateH1Title}/>
            <TextArea labelText="Description:" initValue={description} onChangeInput={updateDescription}/>

            <Select title="Select category" selectOptions={["DESSERT", "MAIN_COURSE", "SOUS"]} onChange={val => setTheme(val)}/>

            {getListParagraphComponent()}
            <p></p>
            <div><Button text="+ add new paragraph" btnStyle="btn-info" onClick={addParagraphClick}/></div>
            <p></p>
            <div><Button text="Post in WORLD" btnStyle="btn-outline-dark" onClick={onSaveClick}/></div>

        </div>
    )

}

export default CreateArticle;