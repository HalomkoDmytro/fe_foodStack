import React from 'react';

const Pagination = ({first, totalPages, last, pageNumber, updatePage}) => {

    const listPaginationElement = () => {
        let res = [];
        let from = 0 > pageNumber - 2 ? 0 : pageNumber - 2;
        const maxPages = 8;
        let to = totalPages > from + maxPages ? from + maxPages : totalPages;
        for(let i = from; i < to; i++) {
            let isActive = (i)=== pageNumber ? 'active' : '';
            res.push(
                <li className={`page-item ${isActive}`} key={i}>
                    <a className="page-link"
                        onClick={(e) => {updatePage(i)}}>{i+1}</a>
                </li>
            )
        }

        return res;
    }

    const isFirstDisabled = () => first ? 'disabled' : '';
    const isLastDisabled = () => last ? 'disabled' : '';

    return (
        <div>
            <ul className="pagination">
                <li className={`page-item ${isFirstDisabled()}`} >
                    <a className="page-link" onClick={(e) => {updatePage(0)}}>&laquo;</a>
                </li>

                {listPaginationElement()}

                <li className={`page-item ${isLastDisabled()}`} >
                    <a className="page-link" onClick={(e) => {updatePage(totalPages)}}>&raquo;</a>
                </li>
            </ul>
        </div>
    )
}

export default Pagination;