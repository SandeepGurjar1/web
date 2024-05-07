import React from "react";
import "./happy.css";
import B1 from "../images/ppp1.jpeg";
import B2 from "../images/ppp2.jpeg";
import B3 from "../images/ppp3.jpeg";
import M1 from "../images/mmm1.jpg";
import M2 from "../images/mmm2.jpg";
import M3 from "../images/mmm3.jpg";
import P1 from "../images/p1.jpeg";
import P2 from "../images/pppp2.jpg";
import P3 from "../images/pppp3.jpg";


export default function Angry() {
  return (

    <div>
      <h2>Angry</h2>
      <p>“Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned”</p>
      <h4>Let's Give Some Time To Read These Beautiful Books</h4>
      <div className="books">
        <div className="book1">
            <img src={B1} alt="" />
            <a href="https://www.amazon.in/Anger-Buddhist-Wisdom-Cooling-Flames/dp/0712611819/ref=sr_1_1?crid=LI0BI3A6NFOZ&dib=eyJ2IjoiMSJ9.5ZC5MYWOB_hojFNh_3NVpbvSpZ5F5FdtUjIxDQlbWhYquimnErTFwN4sGh90ARdAErfWxZ-rfVIpk078azdgHccf5NUszGgxJb1BHKVSQu8lcu_zB5PLrC5Y9yYCZvhtO5JcbKsMdbDM81Qw5mRpogcaLeDdpwy1PxQocP-poQE2LrlyrHCJDvo5RMvEdTPj6a-f_D1BydVKgaMqjE2lTqSaBHKO_IZI5_gJT0eMVRk.eJt7Ae3QxgFRdCJRI5vmPeidgIA9I-A_Ufduy5bY01w&dib_tag=se&keywords=thich+nhat+hanh+anger&qid=1715072558&s=books&sprefix=thich+nhat+hanh+ange%2Cstripbooks%2C214&sr=1-1">Anger</a>
        </div>
        <div className="book2">
            <img src={B2} alt="" />
            <a href="https://www.amazon.in/Beyond-Anger-Guide-Thomas-Harbin/dp/073823480X/ref=sr_1_2?crid=3MHR686RB5R33&dib=eyJ2IjoiMSJ9.c-rNI9P9Af8_N07W1s_iDF3rmCSN4M-O8zZq-ISF5RhvtZgR8_tV2sNpqkrgWWAp_VYq7fVWAWmh1dMbeVMAlG723CfgdDPlyio1wR2Je4JkJaeOkPoRnxNqetTR4C5cfDvYA1QFrQ-K1ZjR-wmNT8qYplTk7VWv2BbIkl8NqUzXswfjJy5RMgQvdyYkETWVLFRkpwg3PPvyhXJu2wUOupUAWRjbtgq8q-SXtpAAmDo.4ZcrHziaNfltUYsf64hqfBaon5Q8gUm2GoRlHNgc6JA&dib_tag=se&keywords=beyond+anger&qid=1715072636&s=books&sprefix=beyond+ange%2Cstripbooks%2C256&sr=1-2">Beyond Anger</a>
        </div>
        <div className="book3">
            <img src={B3} alt="" />
            <a href="https://www.amazon.in/Anger-Management-Workbook-Men-Emotions/dp/1623157307/ref=sr_1_1_sspa?crid=1QD6ANXW8RZOV&dib=eyJ2IjoiMSJ9.z9WyZrPzNIUmWvkgCUrGeOjBVmmOiMCNPodxpqGY0owk4kZu3f-FX9IRkRcO_DzHxVnTNGurU6VnKhqocLT8PXjRldHKr2OBljqGS03384xcaWGll_5g-34iBNnyYB40o7Ax_dK0hfIQeyMqgxdE7MLQw9CQ-klipb2SCJItka6ILTW7dVP4ni_J-0ZocY6kpg8oE5xqxOt81vNV_lkrM-JfItKUpgjo-U1_bRXwXDI.tJqxH067MWgk0-ICjOIBKFzj2tI8f_8phzgyp7IVq5o&dib_tag=se&keywords=anger+management+for+men&qid=1715072678&s=books&sprefix=anger+management+for+me%2Cstripbooks%2C224&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1">Anger Management For Men</a>
        </div>
      </div>
      <h4>Movies You May Love to watch</h4>
      <div className="books">
        <div className="book1">
            <img src={M1} alt="" />
            <a href="https://www.imdb.com/title/tt1728239/?ref_=nv_sr_srsg_0_tt_3_nm_1_q_double%2520dhamal">Double Dhamal</a>
        </div>
        <div className="book2">
            <img src={M2} alt="" />
            <a href="https://www.imdb.com/find/?q=hum%20do%20hamare%20do&ref_=nv_sr_sm">Hum Do Hamare Do</a>
        </div>
        <div className="book3">
            <img src={M3} alt="" />
            <a href="https://www.imdb.com/title/tt1455811/">Khatta Meetha</a>
        </div>
      </div>
      <h4>Places You Should Visit</h4>
      <div className="books">
        <div className="book1">
            <img src={P1} alt="" />
            <a href="https://www.google.com/maps/search/nearby+temples/@31.2473557,75.6400169,12z/data=!3m1!4b1?entry=ttu">Temples</a>
        </div>
        <div className="book2">
            <img src={P2} alt="" />
            <a href="">Meditation Centre</a>
        </div>
        <div className="book3">
            <img src={P3} alt="" />
            <a href="https://www.tripadvisor.in/Restaurants">Favourite Restraunts</a>
        </div>
      </div>
    </div>
  );
}
