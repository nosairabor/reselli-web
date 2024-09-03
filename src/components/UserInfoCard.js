import React from 'react';

const UserInfoCard = ({ username, userProfileImg, itemsSold, followerCount}) => {
    return (
    <section className="">
      <div className="container flex items py-8">
        <div className="flex-1 flex items-center justify-start">
          <div className="profileImg w-28 h-28 mr-8 rounded-full border">
            <img src={userProfileImg} className="m-2 rounded-full" />
          </div>
          <div className="">
            <h4 className="text-2xl font-bold text-gray-700">{username}</h4>
            <div className="flex mt-4">
              <p className="text-gray-text-sm mr-6"><span className="font-bold">{itemsSold}</span> Items Sold</p>
              <p className="text-gray-text-sm"><span className="font-bold">{followerCount}</span> Followers</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end gap-x-2">
          <button className="px-3 py-1.5 text-sky-600 border border-sky-600 rounded-md"><p className="text-nowrap">Contact</p></button>
          <button className="px-3 py-1.5 text-sky-600 border border-sky-600 rounded-md"><p className="text-nowrap">Save User</p></button>
        </div>
      </div>
    </section>
    );
}

export default UserInfoCard;
