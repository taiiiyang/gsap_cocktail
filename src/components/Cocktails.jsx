import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cocktailLists, mockTailLists } from "../constants/index.js";

const Cocktails = () => {
  useGSAP(() => {
    // gsap 内部会计算，如果无法到达 end ，则不会应用动画
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeline
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  });
  return (
    <section id='cocktails' className='noisy'>
      <img
        src='https://cdn.taiiiyang.com/cocktails/images/cocktail-left-leaf.png'
        alt='l-leaf'
        id='c-left-leaf'
      />
      <img
        src='https://cdn.taiiiyang.com/cocktails/images/cocktail-right-leaf.png'
        alt='r-leaf'
        id='c-right-leaf'
      />

      <div className='list'>
        <div className='popular'>
          <h2>Most popular cocktails:</h2>

          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className='md:me-28'>
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='loved'>
          <h2>Most loved mocktails:</h2>

          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className='me-28'>
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
