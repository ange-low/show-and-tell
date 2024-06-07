import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Scroll() {
  const main = useRef();

  useGSAP(
    () => {
      // const boxes = gsap.utils.toArray(".box");
      // boxes.forEach((box) => {
      //   gsap.to(box, {
      //     x: 150,
      //     scrollTrigger: {
      //       trigger: box,
      //       start: "bottom bottom",
      //       end: "top 20%",
      //       scrub: true,
      //       // markers: true,
      //     },
      //   });
      // });
      var tl = gsap.timeline({ defaults: { duration: 2, ease: "none" } });

      tl.to("#scramble", {
        duration: 3,
        scrambleText: {
          text: "ScrambleText allows you to animate the scrambling of text.",
          chars: "lowerCase",
          revealDelay: 0.5,
          tweenLength: false,
        },
      })

        .to("#charsCustom", {
          duration: 4,
          scrambleText: {
            text: "Specify a set of characters to scramble like 'XO'",
            chars: "XO",
            revealDelay: 1,
            tweenLength: false,
            speed: 0.4,
          },
        })

        .to("#charsNumbers", {
          duration: 4,
          scrambleText: { text: "or use only numbers,", chars: "0123456789" },
        })

        .to("#charsUppercase", {
          scrambleText: { text: "UPPERCASE", chars: "upperCase", speed: 0.3 },
        })

        .to("#charsLowercase", {
          scrambleText: {
            text: "or lowercase.",
            chars: "lowerCase",
            speed: 0.3,
          },
        })

        .to("#newClass", {
          scrambleText: {
            text: "Even apply a custom class to the text.",
            chars: "lowerCase",
            speed: 0.3,
            newClass: "orange",
            revealDelay: 0.5,
            tweenLength: false,
          },
        });
    },
    { scope: main }
  );

  return (
    <div>
      <section className="section flex-center column">
        <div className="demo">
          <div id="textblock">
            <div id="scramble"></div>
            <span id="charsCustom"></span>
            <span id="charsNumbers"></span>
            <br />
            <span id="charsUppercase"></span>
            <span id="charsLowercase"></span>
            <div id="newClass"></div>
          </div>
        </div>
        <h2>Basic ScrollTrigger with React</h2>
        <p>Scroll down to see the magic happen!!</p>
      </section>
      <div className="section flex-center column" ref={main}>
        <div className="box gradient-blue">box</div>
        <div className="box gradient-blue">box</div>
        <div className="box gradient-blue">box</div>
      </div>
      <section className="section"></section>
    </div>
  );
}
