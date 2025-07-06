import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";

function Hero() {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplitText = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.map((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      duration: 1.8,
      yPercent: 100,
      stagger: 0.06,
      ease: "expo.out",
    });

    gsap.from(paragraphSplitText.lines, {
      opacity: 0,
      duration: 1.8,
      yPercent: 100,
      stagger: 0.06,
      ease: "expo.out",
      delay: 1, // 距离上一个动画结束后的间隔
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata(() => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    });
  }, []);

  return (
    <>
      <section id='hero' className='noisy'>
        <h1 className='title'>MOJITO</h1>

        <img src='/images/hero-left-leaf.png' alt='left-leaf' className='left-leaf' />
        <img src='/images/hero-right-leaf.png' alt='right-leaf' className='right-leaf' />

        <div className='body'>
          {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}

          <div className='content'>
            <div className='space-y-5 hidden md:block'>
              <p>Cool. Crisp. Classic.</p>
              <p className='subtitle'>
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className='view-cocktails'>
              <p className='subtitle'>
                Every cocktail on our menu is a blend of premium ingredients, creative flair, and
                timeless recipes — designed to delight your senses.
              </p>
              <a href='#cocktails'>View cocktails</a>
            </div>
          </div>
        </div>
      </section>

      <div className='video absolute inset-0'>
        <video ref={videoRef} muted playsInline preload='auto' src='/videos/output.mp4' />
      </div>
    </>
  );
}

export default Hero;
