import React from "react";
import Card from "./Card";
import logo1 from '../Images/websitematterwithpictures/Picture1.jpg';
import logo2 from '../Images/websitematterwithpictures/Picture2.png';
import logo3 from '../Images/websitematterwithpictures/Picture3.png';
import logo4 from '../Images/websitematterwithpictures/Picture4.jpg';
import logo5 from '../Images/websitematterwithpictures/Picture5.png';
import logo6 from '../Images/websitematterwithpictures/Picture6.jpg';
import logo7 from '../Images/websitematterwithpictures/Picture7.png';
import logo8 from '../Images/websitematterwithpictures/Picture8.jpg';
import logo9 from '../Images/websitematterwithpictures/Picture9.png';
import logo10 from '../Images/websitematterwithpictures/Picture10.jpg';
import logo11 from '../Images/websitematterwithpictures/Picture11.png';
import logo12 from '../Images/websitematterwithpictures/Picture12.png';
import logo13 from '../Images/websitematterwithpictures/Picture13.png';
import logo14 from '../Images/websitematterwithpictures/Picture14.png';
import logo15 from '../Images/websitematterwithpictures/Picture15.jpg';
import logo16 from '../Images/websitematterwithpictures/Picture16.png';
import logo17 from '../Images/websitematterwithpictures/Picture17.png';
import logo18 from '../Images/websitematterwithpictures/Picture18.jpg';
import logo19 from '../Images/websitematterwithpictures/Picture19.jpg';
import logo20 from '../Images/websitematterwithpictures/Picture20.jpg';
import logo21 from '../Images/websitematterwithpictures/Picture21.png';
import logo22 from '../Images/websitematterwithpictures/Picture22.png';
import logo23 from '../Images/websitematterwithpictures/Picture23.jpg';
import logo24 from '../Images/websitematterwithpictures/Picture24.jpg';
import logo25 from '../Images/websitematterwithpictures/Picture25.jpg';
import logo26 from '../Images/websitematterwithpictures/Picture26.jpg';

function AboutUs() {
  var cards_data = [
    {
      title: "Fast fashion",
      img: logo1,
      content:
        "Fast fashion is the term used to describe inexpensive, fashionable apparel that is always being replaced with new collections and flows quickly from design to retail outlets to follow trends.",
    },
    {
      title: "",
      img: logo2,
      content:
        "",
    },
    {
      title: "",
      img: logo3,
      content:
        "",
    },
    {
      title: "Frugal Innovation",
      img: logo4,
      content:"It is an ability to do more with less by creating more business and social value while minimizing the use of resources such as energy, capital and time,Frugal innovation is developed in severe resource constraints it involves good quality and reasonably priced products or services even for the customers with modest lifestyles. Frugal innovations are good-enough, affordable products that meet the needs of resource-constrained consumers. Frugal innovations focus on context, affordability, and renewability means it could potentially lead to social sustainability." 
      
    },
    {
      title: "",
      img: logo5,
      content:
        "",
    },
    {
      title: "",
      img: logo6,
      content:
        "",
    },
    {
      title: "Design Concepts",
      img: logo7,
      content:
        "There are some design concepts which can lead to frugal innovation in apparel designing which are discussed below-",
    },
    {
      title: "Upcycling",
      img: logo8,
      content:
        "Upcycling is the practice of creating new, wearable, fashionable products out of used or discarded clothing and materials. It is a sustainable practice used in the fashion industry with the goals of minimizing the negative effects of clothes manufacture on the environment, waste, and resource conservation.",
    },
    {
      title: "",
      img: logo9,
      content:
        "",
    },
    {
      title: "",
      img: logo10,
      content:
        "",
    },
    {
      title: "",
      img: logo11,
      content:
        "",
    },
    {
      title: "",
      img: logo12,
      content:
        "",
    },
    {
      title: "",
      img: logo13,
      content:
        "",
    },
    {
      title: "Recycling",
      img: logo14,
      content:
        "Recycling is the process of converting waste resources into new materials and items.",
    },
    {
      title: "",
      img: logo15,
      content:
        "",
    },
    {
      title: "",
      img: logo16,
      content:
        "",
    },
    {
      title: "Modular design",
      img: logo17,
      content:
        "Modular clothing refers to garments with removable or adaptable pieces that can be readily removed, switched out, or reconstructed to create alternative designs, lengths, or overall looks in response to changing fashions or needs.",
    },
    {
      title: "Transformable fashion",
      img: logo18,
      content:
        "Transformable fashion refers to any clothing item designed to be easily altered, either by the wearer or a specialist service provider.",
    },
    {
      title: "",
      img: logo19,
      content:
        "",
    },
    {
      title: "",
      img: logo20,
      content:
        "",
    },
    {
      title: "Repair",
      img: logo21,
      content:
        "Repairs could involve patching tears and snags in the cloth itself or replacing lost or broken parts like rivets, buttons, and zippers.Repairing can be done by using various techniques-",
    },
    {
      title: "Repair",
      img: logo22,
      content:
        "Repairs could involve patching tears and snags in the cloth itself or replacing lost or broken parts like rivets, buttons, and zippers.Repairing can be done by using various techniques-",
    },
    {
      title: "Minimalism",
      img: logo23,
      content:
        "The minimalist approach to clothing entails selecting classic, high-quality garments that are always in trend and having a small wardrobe.",
    },
    {
      title: "Ways to Create a Minimalist Wardrobe and Closet",
      img: logo24,
      content:
        "Wear fewer colors,Embrace the idea of one,Donate, sell, recycle, discard,Impose an arbitrary moratorium on shopping,Set a monthly spending limit,Purchase quality over quantity,Avoid the sale racks",
    },
    {
      title: "",
      img: logo25,
      content:
        "",
    }
  ];
  return (
    <div id="aboutus" className="body_content">
      <img></img>
      <br />
      <p>
        
        <h3>Before we discuss those methods of frugal innovation, first understand what is fast fashion and how it affects the environment?</h3>

      </p>
      <br />
      <p>
        <h4>1.Fast fashion</h4>
      </p>
      <br />
      <p>
        <h4>2.Frugal Innovation</h4>
      </p>
      <br />
      <br />
    <div >
        {cards_data.map((cd) => {
          return (<div><p><Card title={cd.title} content={cd.content} img={cd.img} /> </p></div>
          );
        })}
      </div>
  </div>
    
  );
}

export default AboutUs;
