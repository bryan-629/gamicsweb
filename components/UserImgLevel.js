import React from "react";
import Image from "next/image";
import styles from "../styles/UserImg.module.css";

const getName = (userName) => {
  if (userName.includes("#")) {
    userName = userName.split("#");
    return userName[0];
  }
};
const getId = (userName) => {
  if (userName.includes("#")) {
    userName = userName.split("#");
    return `#${userName[1]}`;
  }
};

function UserImg({ level, userName }) {
  //unowt.png
  return (
    <div className={` d-flex jus-center  al-center ${styles.userImg}`}>
      <div className="d-flex jus-center column al-center">
        <div className={`${styles.imgBorder}`}>
          <Image
            layout="fixed"
            width={80}
            height={80}
            src="/img/unowt.png"
            alt="user image"
          ></Image>
        </div>
        <div className={` ${styles.levelContainer}`}>
          <p className={` ${styles.level}`}>{level}</p>
        </div>
      </div>
      <div className="jus-center al-center ml-12 pb-24">
        <h5 className="upper">{getName(userName)}</h5>
        <p className="text-gray upper">{getId(userName)}</p>
      </div>
    </div>
  );
}

export default UserImg;
