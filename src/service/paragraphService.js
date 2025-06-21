import ParagraphAPI from '../api/paragraphAPI'

const deleteParagraph = async (id) => {
    return new ParagraphAPI().deleteParagraph(id);
}

export {deleteParagraph};