"use client";
import React from "react";
import styles from "../styles/HomeScreen.module.css";
import "../app/globals.css";
import Image from "next/image";

const HomeScreen = () => {
  const skill = [
    { id: "htmls", name: "HTMLS", icon: "/icons/icons8-html.svg" },
    { id: "react", name: "React", icon: "/icons/icons8-react.svg" },
    { id: "node.js", name: "Node.js", icon: "/icons/icons8-nodejs.svg" },
    { id: "c++", name: "C++", icon: "/icons/icons8-nodejs.svg" },
    {
      id: "javascript",
      name: "Javascript",
      icon: "/icons/icons8-javascript.svg",
    },
    { id: "css", name: "CSS", icon: "/icons/icons8-css.svg" },
    { id: "github", name: "Github", icon: "/icons/icons8-github.svg" },
    { id: "git", name: "Git", icon: "/icons/icons8-git.svg" },
    { id: "arduino", name: "Arduino", icon: "/icons/icons8-arduino.svg" },
    {
      id: "embeddedsystem",
      name: "Embedded\nSystem",
      icon: "/icons/icons8-board.png",
    },
  ];
  const service = [
    {
      id: "website",
      icon: "/icons/icons8-google-code.svg",
      name: "Website Development",
    },
    { id: "app", icon: "/icons/icons8-mobile.png", name: "App Development" },
    {
      id: "arduino",
      icon: "/icons/icons8-arduino-2.svg",
      name: "Arduino Code",
    },
    { id: "pcb", icon: "/icons/icons8-board-2.png", name: "Design PCB" },
    { id: "ux/ui", icon: "/icons/icons8-code.png", name: "Design UX/UI" },
  ];
  const contact = [
    {
      id: "linkedin",
      icon: "/icons/icons8-linkedin.svg",
      href: "https://www.linkedin.com/in/arm-sogood-93177a308/",
    },
    {
      id: "git",
      icon: "/icons/icons8-github-2.svg",
      href: "https://github.com/Armza2112",
    },
    {
      id: "face",
      icon: "/icons/icons8-facebook.svg",
      href: "https://www.facebook.com/cheewanont.chamnanrob/2",
    },
  ];
  return (
    <>
      <section className="h-150 items-center flex ">
        <div className="flex flex-col gap-10 ">
          <div className={styles.text__banner}>
            <div className="flex items-end gap-3">
              <h1 className="text-[36px] font-bold ">Hello</h1>
              <div className={styles.dot}></div>
            </div>
            <div className="flex items-end">
              <div className={styles.line__banner} />
              <h2 className="text-4xl font-medium pl-2">I'm Arm</h2>
            </div>
            <h3 className="text-4xl font-bold">Computer Engineering</h3>
          </div>
          <div className="flex gap-2">
            <button className={`${styles.button} bg-[var(--clr-orange)]`}>
              Got a product
            </button>
            <button
              className={`${styles.button} border-2 border-[var(--clr-orange)]`}
            >
              My resume
            </button>
          </div>
        </div>
      </section>
      <section className={styles.skill_box}>
        <div className={styles.skill__box__sub}>
          <div className="flex flex-wrap justify-center gap-50">
            {skill.slice(0, 7).map((skills) => (
              <div key={skills.id} className={styles.skill__list}>
                <Image
                  src={skills.icon}
                  alt={skills.name}
                  width={64}
                  height={64}
                />
                <p className={styles.text__skills}>{skills.name}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-50 mt-15">
            {skill.slice(7).map((skills) => (
              <div key={skills.id} className={styles.skill__list}>
                <Image
                  src={skills.icon}
                  alt={skills.name}
                  width={64}
                  height={64}
                />
                <p className={styles.text__skills}>{skills.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-30 flex justify-between">
        <div>
          {service.map((services) => (
            <div className="flex items-center gap-15 mb-2" key={services.id}>
              <div className="gap-2 flex flex-col items-center">
                <div className={styles.line} />
                <div className={styles.circle} />
              </div>
              <div>
                <Image
                  src={services.icon}
                  alt={services.name}
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h1 className={styles.text__service}>{services.name}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="w-200 flex flex-col gap-10">
          <div className="flex-col flex gap-10">
            <h1 className={`${styles.text__h} text-4xl`}>About me</h1>
            <p className={styles.text__subtitle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              commodi in velit nobis porro. Adipisci corporis vero impedit
              perferendis accusamus maiores earum magni quasi ipsa nulla. Dolor
              sint quo delectus quos officiis officia beatae repellendus!
              Obcaecati commodi vitae culpa dolorem.
            </p>
          </div>
          <div className="flex justify-between">
            <div>
              <div>
                <span className={`${styles.text__h} text-[32px]`}>120</span>
                <span className={`${styles.text__symbol} text-[32px]`}>+</span>
              </div>
              <div>
                <p className={styles.text__subtitle}>
                  Completed
                  <br />
                  Projects
                </p>
              </div>
            </div>
            <div>
              <div>
                <span className={`${styles.text__h} text-[32px]`}>120</span>
                <span className={`${styles.text__symbol} text-[24px]`}>%</span>
              </div>
              <div>
                <p className={styles.text__subtitle}>
                  Client
                  <br />
                  satisfaction
                </p>
              </div>
            </div>
            <div>
              <div>
                <span className={`${styles.text__h} text-[32px]`}>120</span>
                <span className={`${styles.text__symbol} text-[32px]`}>+</span>
              </div>
              <div>
                <p className={styles.text__subtitle}>
                  Year of
                  <br />
                  experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-5 mt-40">
        <div className="flex justify-center gap-5 flex-row">
          {contact.map((contacts) => (
            <a key={contacts.id} href={contacts.href}>
              <img src={contacts.icon} alt="github" width={30} height={30} />
            </a>
          ))}
        </div>
        <p className={`${styles.text__subtitle} text-center`}>
          @2024 Cheewanont.com
        </p>
      </footer>
    </>
  );
};

export default HomeScreen;
