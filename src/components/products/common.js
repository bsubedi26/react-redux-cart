import React from 'react';

export const Logo = () => {
    return (
        <div className="p-3 d-flex justify-content-center">
            <img src="//cdn.shopify.com/s/files/1/0985/9080/t/12/assets/logo.svg?3225173906714521792" alt="Bremont" />
        </div>
    )
}

export const SubRoutes = () => {
    return (
        <div className="d-flex justify-content-center">
            <ul className="d-inline-block ul-style-none ul-sub-routes">
                <li className="mx-1">CHRISTMAS GIFTS</li>
                <li className="mx-1">WATCH STRAPS & ACCESSORIES</li>
                <li className="mx-1">SMALL ACCESSORIES</li>
                <li className="mx-1">MILITARY</li>
                <li className="mx-1">BOUTIQUES</li>
            </ul>
        </div>
    )
}
