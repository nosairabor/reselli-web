import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "rsuite/Breadcrumb";
import BreadcrumbItem from "rsuite/BreadcrumbItem";
import ItemCard from "@/app/components/ItemCard";
import UserInfoCard from "@/app/components/UserInfoCard";

export default function Home() {
  const items = [
    {
      id: 1,
      username: "user1",
      imgSrc: "imgSrc",
      itemName: "Black Satin Trouser",
      itemSize: "2 / Xs",
      itemCurrency: "NGN",
      itemPrice: 8750,
    },
    {
      id: 2,
      username: "user2",
      imgSrc: "imgSrc",
      itemName: "Black Satin Trouser",
      itemSize: "5 / L",
      itemCurrency: "NGN",
      itemPrice: 10000,
    },
    {
      id: 3,
      username: "user1",
      imgSrc: "imgSrc",
      itemName: "Black Satin Trouser",
      itemSize: "6 / XXL",
      itemCurrency: "NGN",
      itemPrice: 750,
    },
    {
      id: 4,
      username: "user4",
      imgSrc: "",
      itemName: "Black Satin Trouser",
      itemSize: "2 / Xs",
      itemCurrency: "NGN",
      itemPrice: 250,
    },
  ];

  const userInfo = {
    username: "MarySlessor",
    userProfileImg: "#",
    itemsSold: 256,
    followerCount: 37,
  };

  const name = "Mary";

  return (
    <>
      <section className="breadcrumbArea bg-gray-50 border-b">
        <div className="container">
          <div className="py-4">
            <Breadcrumb className="mb-0">
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="#">Customer Dashboard</BreadcrumbItem>
              <BreadcrumbItem
                aria-current="page"
                active
                className="text-sky-500"
              >
                Customer Profile
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </section>

      <UserInfoCard
        username={userInfo.username}
        userProfileImg={userInfo.userProfileImg}
        itemsSold={userInfo.itemsSold}
        followerCount={userInfo.followerCount?.toLocaleString()}
      />

      <section>
        <div className="container flex py-8">
          <div className="pr-2 border-r w-1/6">
            <ol>
              <li className="inline-block text-ellipsis overflow-hidden">
                <a href="#" className="text-sm hover:underline">
                  Books & Magazines
                </a>
              </li>
              <li className="inline-block text-ellipsis overflow-hidden">
                <a href="#" className="text-sm hover:underline">
                  Books & Magazines
                </a>
              </li>
              <li className="inline-block text-ellipsis overflow-hidden">
                <a href="#" className="text-sm hover:underline">
                  Clothing, Shoes & Accessories
                </a>
              </li>
            </ol>
          </div>
          <div className="p-6 w-5/6">
            <h4 className="text-gray-600 font-bold text-3xl">All Items</h4>
            <div className="cardSection flex mt-12 gap-x-8">
              {items.length == 0 ? (
                <p>{userInfo.username} has not listed any items yet. </p>
              ) : null}
              {items.map((item) => (
                <ItemCard
                  key={item.id}
                  username={item.username}
                  imgSrc={item.imgSrc}
                  itemName={item.itemName}
                  itemSize={item.itemSize}
                  itemCurrency={item.itemCurrency}
                  itemPrice={item.itemPrice.toLocaleString()}
                />
              ))}
              ;
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
