import React, {useState} from 'react';

const Pagination = ({first, from, to, last, currentNumber, handleClick}) => {

    const listPaginationElement = () => {
        let res = [];

        for(let i = from; i<=to; i++) {
            let isActive = i === currentNumber ? 'active' : '';
            res.push(
                <li className={`page-item ${isActive}`}>
                    <a className="page-link"
                        onClick={(e) => {console.log("click")}}>{i}</a>
                </li>
            )
        }

        return res;
    }


    return (
        <div>
            <ul className="pagination">
                <li className="page-item disabled">
                    <a className="page-link" href="#">&laquo;</a>
                </li>

                {listPaginationElement()}

                <li className="page-item">
                    <a className="page-link" href="#">&raquo;</a>
                </li>
            </ul>
        </div>
        )
}

export default Pagination;