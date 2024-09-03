import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "rsuite/Breadcrumb";
import { Button } from "rsuite";
import BreadcrumbItem from "rsuite/BreadcrumbItem";
import ItemCard from "@/app/components/ItemCard";
import UserInfoCard from "@/app/components/UserInfoCard";
import { Carousel, RadioGroup, Radio, Divider } from "rsuite";

export default function ItemDesc() {
  const items = [
    {
      id: 1,
      username: "MarySlessor",
      imgSrc: "",
      itemName: "Black Satin Trouser",
      itemSize: "2 / Xs",
      itemCurrency: "NGN",
      itemPrice: 8750,
    },
    {
      id: 2,
      username: "user2",
      imgSrc: "",
      itemName: "Black Satin Trouser",
      itemSize: "5 / L",
      itemCurrency: "NGN",
      itemPrice: 10000,
    },
    {
      id: 3,
      username: "user1",
      imgSrc: "",
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
              <BreadcrumbItem href="#">All Items</BreadcrumbItem>
              <BreadcrumbItem
                aria-current="page"
                active
                className="text-sky-500"
              >
                Item Name:: Static
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-8">
          <div className="flex gap-x-6">
            <div className="w-3/4">
              <Carousel className="custom-slider" shape={"bar"}>
                <img
                  src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=ItemImg1"
                  height="250"
                />
                <img
                  src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=ItemImg2"
                  height="250"
                />
                <img
                  src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=ItemImg3"
                  height="250"
                />
                <img
                  src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=ItemImg4"
                  height="250"
                />
                <img
                  src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=ItemImg5"
                  height="250"
                />
              </Carousel>
            </div>
            <div className="w-1/4">
              <div className="card">
                <div className="p-4 border-b">
                  <p className="font-bold uppercase text-sm">
                    Basic Thrift Item
                  </p>
                </div>
                <div className="p-4 border-b">
                  <p className="mt-1 text-sky-400 font-bold">NGN 2,345.95</p>
                </div>
                <div className="p-4 border-b flex gap-x-6">
                  <p>Listed 2 hours ago</p>
                  <p>Ikorodu, Lagos, Nigeria</p>
                </div>
                <div className="p-4 border-b flex gap-x-6">
                  <table>
                    <tbody>
                      <tr>
                        <td>Seller</td>
                        <td>{items[1].username}</td>
                      </tr>
                      <tr>
                        <td>Size</td>
                        <td>{items[1].itemSize}</td>
                      </tr>
                      <tr>
                        <td>Location</td>
                        <td>{items[1].itemSize}</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td>{items[1].itemPrice}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 border-b gap-x-6">
                  <Button appearance="primary" color="sky" block>
                    Buy Now
                  </Button>
                  <Button appearance="ghost" color="sky" className="mt-8" block>
                    Make Offer
                  </Button>
                </div>
                <div className="p-4 border-b gap-x-6">
                  <Button appearance="link" color="sky" block>
                    Buyer Protection
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t-2">
            <h4 className="text-gray-700 font-bold uppercase">
              {userInfo.username}'s Items [8]{" "}
            </h4>
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
            <div className="mt-6 text-center">
              <Button appearance="ghost" color="sky">
                Load More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
