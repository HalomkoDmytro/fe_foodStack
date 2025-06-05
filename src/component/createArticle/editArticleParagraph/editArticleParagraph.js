import React, {useState, useEffect} from 'react';

import TextArea from '../../textArea';
import Select from '../../select'
import ChoseImg from '../../choseImg'
import Button from '../../button'

const PICTURE = 'Picture';
const TEXT = 'TEXT';
const OPTIONS = [TEXT, PICTURE];

const EditArticleParagraph = ({id, onDelete, type='', onAddBefore, data, updateData, updateElementType}) => {

    const [paragraphType, setType] = useState(type);

    const updateType = (newType, id) => {
        setType(newType);
        updateElementType(newType, id);
    }

    const getCreateArticleByType = () => {
        switch (paragraphType) {
            case TEXT:
                return <TextArea id={id} labelText="Paragraph:" onChangeInput={(data) => updateData(data, id)} text={data}/>
            case PICTURE:
                return <ChoseImg id={id} onChangeInput={(data, id) => updateData(data, id)} source={data}/>
            default:
                return ''
        }
    }

    return(
        <div key={id}>
            <Select title="Select category" selectOptions={OPTIONS} onChange={(type) => updateType(type, id)}/>

            {getCreateArticleByType()}

            <Button text="Add before this" btnStyle="btn-outline-info" onClick={onAddBefore} />
            <Button text="Delete paragraph" btnStyle="btn-danger" onClick={onDelete}/>
        </div>
    )
}

export default EditArticleParagraph;