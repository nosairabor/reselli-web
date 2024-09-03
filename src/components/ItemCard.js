import React from 'react';

const ItemCard = ({username, imgSrc, itemName, itemSize, itemCurrency, itemPrice }) => {
    return (
      <a href="#" className="flex-1 w-56 card hover:pointer">
        <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=ITEM" className="h-64 w-full" />
        <div className="cardDetails">
            <div className="sellerDetails flex items-center justify-between px-4 py-2 border-b">
            {username}
            <div className="border border-sky-300 rounded-full w-12 h-12">
                <img className="p-1 w-full" alt="" src={imgSrc != "" ? imgSrc : "https://avatar.iran.liara.run/public/boy?username=Ash"} />
            </div>
            </div>
            <div className="px-4 py-2">
            <p>{itemName}</p>
            <p>{itemSize}</p>
            <p className="mt-1 text-sky-400">{itemCurrency} {itemPrice}</p>
            </div>
        </div>
      </a>
    );
}

export default ItemCard;
