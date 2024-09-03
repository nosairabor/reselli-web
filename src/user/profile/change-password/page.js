import React from "react";
import { Button, Input } from "rsuite";

const ChangePassword = () => {
  return (
    <section className="container py-8">
      <h4 className="page-title text-2xl uppercase">Change Password</h4>
      <div className="card p-8 mt-8">
        <div className="flex items-center gap-x-14">
          <div className="flex-1">
            <ul className="list-disc">
              <li className="mt-4">
                <p className="text-justify text-sm">
                  When setting up a password, go for something that is not too
                  obvious. It can be a combination of numbers, special
                  characters, uppercase and lowercase letters. The length of the
                  password should be at least 7 characters.
                </p>
              </li>
              <li className="mt-4">
                <p className="text-justify text-sm">
                  Avoid using personal information such as your name, birthday,
                  user name, or email address. This type of information is often
                  publicly available, which makes it easier for someone to guess
                  your password.
                </p>
              </li>
              <li className="mt-4">
                <p className="text-justify text-sm">
                  Avoid using the same password for different account. If
                  someone discovers your password for one account, all of your
                  other accounts will be vulnerable.
                </p>
              </li>
              <li className="mt-4">
                <p className="text-justify text-sm">
                  Avoid using words that can be found in the dictionary. For
                  example, swimming1 would be a weak password.
                </p>
              </li>
              <li className="mt-4">
                <p className="text-justify text-sm">
                  Random passwords are the strongest. If you're having trouble
                  creating one, you can use a password generator instead.
                </p>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <Input type="password" placeholder="Current Password" />
            <Input
              type="password"
              placeholder="New Password"
              className="mt-6"
            />
            <Input
              type="password"
              placeholder="Confirm New Password"
              className="mt-6"
            />
            <Button appearance="primary" className="mt-6" block>
              Update Password
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
