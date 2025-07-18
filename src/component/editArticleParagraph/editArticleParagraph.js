import React, {useState, useEffect} from 'react';

import TextArea from '../textArea';
import ListGroupEdit from '../listGroupEdit';
import Select from '../select'
import ChoseImg from '../choseImg'
import Button from '../button'

const PICTURE = 'PICTURE';
const TEXT = 'TEXT';
const LIST_GROUPS = "LIST_GROUPS";
const OPTIONS = [TEXT, PICTURE, LIST_GROUPS];

const EditArticleParagraph = ({id, onDelete, type='', onAddBefore, data, updateData, updateElementType}) => {

    const [paragraphType, setType] = useState(type);

    useEffect(() => setType(type), [type]);

    const updateType = (newType, id) => {
        setType(newType);
        updateElementType(newType, id);
    }

    const getCreateArticleByType = () => {
        switch (paragraphType) {
            case TEXT:
                return <TextArea id={id} labelText="Paragraph:" onChangeInput={(data) => updateData(data, id, null)} text={data}/>
            case PICTURE:
                return <ChoseImg id={id} onChangeInput={(data, id, img) => updateData(data, id, img)} source={data}/>
            case LIST_GROUPS:
                return <ListGroupEdit id={id} onChangeInput={(data, id) => updateData(data, id, null)} listData={data}/>
            default:
                return ''
        }
    }

    return(
        <div key={id}>
            <Select title="Paragraph type:" selectOptions={OPTIONS} onChange={(type) => updateType(type, id)} value={paragraphType}/>

            {getCreateArticleByType()}

            <Button text="Add before this" btnStyle="btn-outline-info" onClick={onAddBefore} />
            <Button text="Delete paragraph" btnStyle="btn-danger" onClick={onDelete}/>
        </div>
    )
}

export default EditArticleParagraph;