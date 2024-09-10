"use client";
import "./settings.module.css";
import {
  Tabs,
  Placeholder,
  Avatar,
  Button,
  Input,
  SelectPicker,
  Uploader,
  Toggle,
  DatePicker,
} from "rsuite";

import CheckIcon from "@rsuite/icons/Check";
import PageNextIcon from "@rsuite/icons/PageNext";
import Link from "next/link";
import { notificationList } from "@/data/notificationList";

const stateData = [
  "Abuja FCT",
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Katsina",
  "Kano",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
].map((item) => ({ label: item, value: item }));

const profile = () => {
  // pulling settings list for news
  const newSettingsList1 = notificationList.slice(0, 2);
  // pulling settings list for priority
  const newSettingsList2 = notificationList.slice(2, 7);
  // console.log(newSettingsList);

  return (
    <section className="container flex flex-col gap-12 py-8">
      <Link
        className="page-title text-2xl hover:text-sky-500"
        href={"./profile"}
      >
        Go to my Profile
      </Link>
      <div className="">
        <Tabs defaultActiveKey="1" vertical appearance="subtle">
          <Tabs.Tab eventKey="1" title="Profile Details">
            <div className="card">
              <div className="p-8 flex justify-between items-center">
                <h4 className="text-xl">Your Photo</h4>
                <div className="flex items-center gap-x-4">
                  <Avatar
                    className=".rs-avatar-image"
                    src=""
                    circle
                    color="blue"
                  />
                  <Uploader
                    action="//jsonplaceholder.typicode.com/posts/"
                    className="flex items-center"
                  >
                    <Button
                      className="rs-uploader-trigger-btn rs-btn rs-btn-ghost"
                      appearance="ghost"
                      color=""
                    >
                      Change Photo
                    </Button>
                  </Uploader>
                </div>
              </div>
              <hr />
              <div className="p-8 flex justify-between items-center">
                <h5 className="flex-1 text-lg">About You</h5>
                <div className="flex-1">
                  <Input
                    as="textarea"
                    rows={3}
                    placeholder="About Yourself"
                    className="min-w-28"
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 card">
              <div className="p-8">
                <p className="uppercase">Location</p>
                <div className="mt-6 flex">
                  <h5 className="flex-1 text-lg">Your State</h5>
                  <SelectPicker
                    data={stateData}
                    appearance="default"
                    placeholder="Select State"
                    className="flex-1 w-full"
                  />
                </div>
              </div>
              <hr />
              <div className="p-8">
                <div className="mt-6 flex">
                  <h5 className="flex-1 text-lg">Your City</h5>
                  <Input
                    placeholder="Surulere"
                    className="flex-1 w-full"
                    disabled
                  />
                </div>
              </div>
              <hr />
              <div className="p-8">
                <div className="mt-6 flex justify-between">
                  <h5 className="flex-1 text-lg">Show city in profile</h5>
                  <Toggle size="lg" defaultChecked />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button className="mt-6" appearance="primary" disabled>
                Save
              </Button>
            </div>
          </Tabs.Tab>

          <Tabs.Tab eventKey="2" title="Account Settings">
            <div className="card">
              <div className="p-8 flex justify-between items-center">
                <div>
                  <h4 className="text-lg">mary@example.com</h4>
                  <div className="mt-2 flex items-center text-sm font-light">
                    <p>
                      Verified{" "}
                      <span>
                        <CheckIcon color="green" />
                      </span>
                    </p>
                  </div>
                </div>
                <Button appearance="ghost">Change Email</Button>
              </div>
              <hr />
              <div className="p-8 flex justify-between items-center">
                <div>
                  <h4 className="text-lg">Phone Number</h4>
                  {/* <div className="mt-2 flex items-center text-sm font-light">
                      <p>
                        Verified{" "}
                        <span>
                          <CheckIcon color="green" />
                        </span>
                      </p>
                    </div> */}
                </div>
                <Button appearance="ghost">Verify</Button>
              </div>
            </div>

            <div className="card mt-12">
              <div className="p-8">
                <div className="flex">
                  <h5 className="flex-1 text-lg">Full Name</h5>
                  <Input placeholder="Mary Slessor" className="flex-1 w-full" />
                </div>
              </div>
              <hr />
              <div className="p-8">
                <div className="flex">
                  <h5 className="flex-1 text-lg">Gender</h5>
                  <Input placeholder="Surulere" className="flex-1 w-full" />
                </div>
              </div>
              <hr />
              <div className="p-8">
                <div className="flex">
                  <h5 className="flex-1 text-lg">Birthday</h5>
                  <DatePicker className="flex-1 w-full" />
                </div>
              </div>
            </div>

            <div className="card mt-12">
              <div className="p-8 flex justify-between items-center">
                <div>
                  <h4 className="text-lg">Change Password</h4>
                </div>
                <Link href={"/user/profile/change-password"}>
                  <Button appearance="ghost">Change</Button>
                </Link>
              </div>
            </div>

            <div className="card mt-12 hover:shadow-none">
              <Link href="#">
                <div className="p-8 flex justify-between items-center">
                  <div>
                    <h4 className="text-lg">Delete My Account</h4>
                  </div>
                  <PageNextIcon size="3em" />
                </div>
              </Link>
            </div>

            <div className="flex justify-end">
              <Button className="mt-6" appearance="primary" disabled>
                Save
              </Button>
            </div>
          </Tabs.Tab>

          <Tabs.Tab eventKey="3" title="Shipping">
            <div className="card hover:shadow-none">
              <div className="px-8 pt-8 pb-4">
                <h4 className="text-lg">My Address</h4>
              </div>

              <Link href="#">
                <div className="p-8 flex justify-between items-center hover:bg-gray-200">
                  <div>
                    <h4 className="text-lg">Shipping Address</h4>
                    <p className="">
                      Add a preferred location for shipping your items
                    </p>
                  </div>
                  <PageNextIcon size="3em" />
                </div>
              </Link>
            </div>
          </Tabs.Tab>

          <Tabs.Tab eventKey="4" title="Payments">
            <div className="card hover:shadow-none">
              <div className="px-8 pt-8 pb-4">
                <h4 className="text-lg">Wallet</h4>
              </div>

              <Link href="#">
                <div className="p-8 flex justify-between items-center hover:bg-gray-200">
                  <div>
                    <h4 className="text-lg">Payment options</h4>
                    <p className=" text-gray-500">
                      Add a payment method or fund your e-wallet.
                    </p>
                  </div>
                  <PageNextIcon size="3em" />
                </div>
              </Link>
            </div>
            <div className="card hover:shadow-none mt-12">
              <div className="px-8 pt-8 pb-4">
                <h4 className="text-lg">Withdrawal</h4>
              </div>

              <Link href="#">
                <div className="p-8 flex justify-between items-center hover:bg-gray-200">
                  <div>
                    <h4 className="text-lg">Payout options</h4>
                    <p className="text-gray-500">
                      Withdraw your earnings to your local bank account.
                    </p>
                  </div>
                  <PageNextIcon size="3em" />
                </div>
              </Link>
            </div>
          </Tabs.Tab>

          <Tabs.Tab eventKey="5" title="Notifications">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 border rounded-lg p-8">
                {" "}
                <span>News</span>
                <div className="flex flex-col">
                  {newSettingsList1?.map((setting, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between p-2 items-center hover:bg-gray-50"
                      >
                        <h5 className="flex-1 text-lg">
                          {setting?.title}
                          <span className="block text-base text-gray-500">
                            {setting?.subtitle}
                          </span>
                        </h5>
                        <Toggle
                          key={setting?.tabIndex}
                          size="lg"
                          defaultChecked
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-4 border rounded-lg p-8">
                {" "}
                <span>Optional</span>{" "}
                <div className="flex flex-col">
                  {newSettingsList2?.map((setting, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between p-2 items-center hover:bg-gray-50"
                      >
                        <h5 className="flex-1 text-lg">{setting?.title}</h5>
                        <Toggle
                          key={setting?.tabIndex}
                          size="lg"
                          defaultChecked
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Tabs.Tab>

          <Tabs.Tab eventKey="6" title="Privacy">
            <div className="card">
              <div className="p-8">
                <p className="uppercase">Privacy Settings</p>
                <div className="mt-6 flex">
                  <h5 className="flex-1 text-lg">Coming Soon.</h5>
                </div>
              </div>
            </div>
          </Tabs.Tab>
          <Tabs.Tab eventKey="7" title="Security">
            <div className="card hover:shadow-md">
              <div className="px-8 pt-8 pb-4">
                <h4 className="text-lg">Keep your account even more secure</h4>
                <p className="mt-2">
                  We recommend taking extra steps to secure your account, to
                  make using Vinted as safe as possible.
                </p>
              </div>

              <Link href="#">
                <div className="p-8 flex justify-between items-center hover:bg-gray-200">
                  <div>
                    <h4 className="text-lg">Email</h4>
                    <p className="">Check that your email is correct</p>
                  </div>
                  <PageNextIcon size="3em" />
                </div>
              </Link>
              <hr />
              <Link href="#">
                <div className="p-8 flex justify-between items-center hover:bg-gray-200">
                  <div>
                    <h4 className="text-lg">Password</h4>
                    <p className="">Change your password</p>
                  </div>
                  <PageNextIcon size="3em" />
                </div>
              </Link>
            </div>
          </Tabs.Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default profile;
