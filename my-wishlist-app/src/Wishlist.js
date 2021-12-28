import React from 'react';

export class Wishlist extends React.Component {
    
    render () {
        return (
        <div className="wishlist">
            <h1>Joey's Christmas<br /> Wishlist</h1>
            <ul className="list">
                <li className="item"><a href="https://www.walmart.com/ip/Tru-Grit-Fitness-30-lb-Cast-Iron-Kettlebell-Weight/553369136">KettleBell</a></li>
                <li className="item"><a href="https://www.converse.com/shop/p/chuck-taylor-all-star-unisex-low-top-shoe/M5039_130.html?pid=M9696MP&dwvar_M9696MP_size=130&dwvar_M9696MP_color=black%20monochrome&dwvar_M9696MP_width=standard&styleNo=M5039&pdp=true&cgid=mens-classic-chuck-shoes">Chucks</a></li>
                <li className="item"><a href="https://www.bose.com/en_us/products/headphones_outlet/noise-cancelling-headphones-700-fr.html#v=noise_cancelling_headphones_700_fr_black">Headphones</a></li>
                
            </ul>
        </div>
        )
        

    }
}