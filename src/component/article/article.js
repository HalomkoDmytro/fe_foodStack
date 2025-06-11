import React, {useState} from 'react';

const Article = ({articleData}) => {

    const [article, setData] = useState(articleData);

    return (
        <div>{article}</div>
    )
}

export default Article;