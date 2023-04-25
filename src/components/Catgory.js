import React from "react";
import { Link, Outlet } from "react-router-dom";
import Card from "./Card";
import photo from "../imgaes/photo.jpg";
import photo2 from "../imgaes/photo2.jpg";
import photo3 from "../imgaes/photo3.jpg";
import photo4 from "../imgaes/photo4.jpg";
import photo5 from "../imgaes/photo5.jpg";
import photo6 from "../imgaes/photo6.jpg";
let info = [
  {
    img: photo,
    title:
      "林間小屋：坐落在樹林中，有獨立的廚房和俯瞰美景的露台，適合1-2人入住",
    location: "合歡山",
    adj1: "環境清幽",
    adj2: "自然寧靜",
    adj3: "空氣清新",
    adj4: "山水秀麗",
    desc: "位於台灣南投縣仁愛鄉合歡山，周邊環境富含自然資源，山林茂密，空氣清新，蟲鳴鳥叫，四季變化豐富，春季百花盛開，夏季綠樹成蔭，秋季紅葉黃橙斑斕，冬季白雪皚皚，是個遠離都市喧囂的避暑勝地。此外，也可以到附近的合歡山國家森林遊樂區、奇萊山莊等景點進行探險、賞景",
    price: "14,292",
  },
  {
    img: photo2,
    title: "海濱別墅：鄰近海灘，擁有獨立的庭院和游泳池，能容納2-4人入住",
    location: "黃金海岸",
    adj1: "環境海闊天空",
    adj2: "風景優美",
    adj3: "陽光明媚",
    adj4: "海風清涼",
    desc: "位於澳洲昆士蘭黃金海岸（Gold Coast），這裡是享受陽光海灘的天堂，清晨可以在海灘散步，午後可以享受陽光沙灘，晚上可以觀賞美麗的落日。此外，還可以前往附近的山區、自然保護區進行探險、賞景，例如：聖莫尼卡山脈、索恩尼翁自然保護區、昆士蘭世界自然遺產區等",
    price: "7,856",
  },
  {
    img: photo3,
    title:
      "森林套房：在山區的森林中，設有獨立的客廳和臥室，並有大型落地窗，能讓您欣賞到自然美景",
    location: "加拿大",
    adj1: "綠樹成蔭",
    adj2: "鳥語花香",
    adj3: "清涼舒適",
    adj4: "景色優美",
    desc: "位於加拿大不列顛哥倫比亞省溫哥華島（Vancouver Island）的森林公園中，這裡有著古老的森林和豐富的野生動植物資源，是個探索自然的好地方。除了在套房中享受清涼舒適的環境，還可以到森林公園中遊覽，例如：太平洋環繞公路、長青自然保護區、巨木神話自然保護區等。",
    price: "16,764",
  },
  {
    img: photo4,
    title:
      "瀑布別墅：坐落在瀑布旁，有獨立的室內泳池和寬敞的客廳，能容納4-6人入住",
    location: "冰島",
    adj1: "清流潺潺",
    adj2: "瀑布飛瀑",
    adj3: "清流潺潺",
    adj4: "氣氛浪漫",
    desc: "位於冰島冰河國家公園（Vatnajökull National Park）附近，環境清流潺潺、瀑布飛瀑、山清水秀、氣氛浪漫。瀑布別墅坐落在令人驚嘆的冰河和瀑布附近，提供了一個獨特而令人難忘的住宿體驗。您可以欣賞冰川和瀑布的壯觀景象，享受清新的空氣和潔凈的天空。",
    price: "16,764",
  },
  {
    img: photo5,
    title:
      "河畔小屋：位於河邊，設有獨立的露台和大型落地窗，能讓您欣賞到河流美景，能容納2-4人入住。",
    location: "泰國清邁",
    adj1: "清流潺潺",
    adj2: "水草葱茏",
    adj3: "景色宜人",
    adj4: "氣氛寧靜",
    desc: "泰國清邁的湄公河畔，讓您享受悠閒自在的假期。在河畔小屋您可以聆聽悠揚的流水聲，沐浴在陽光下，欣賞自然美景。在菲沙河谷，您可以漫步於茂密的林蔭中，感受大自然的美妙；而在泰國清邁，您可以感受異國風情，品嚐道地美食，並體驗當地的文化和生活方式。",
    price: "19,586",
  },
  {
    img: photo6,
    title:
      "山景套房：坐落在山區，設有大型落地窗和獨立的臥室，能容納2-3人入住，讓您欣賞到絕美的山景",
    location: "濟州島",
    adj1: "山光水色",
    adj2: "峰巒疊翠",
    adj3: "景色壯觀",
    adj4: "氣氛清幽",
    desc: "山景套房位於韓國濟州島壯麗的自然環境中，您可以欣賞到神秘的火山地形和自然景觀，探索島上的風景和文化。這些套房的氛圍清幽，讓您可以在安靜中放鬆身心，享受到大自然的恩惠。從房間的窗戶望出去，您可以欣賞到景色壯觀的山峰和美麗的風景。這些套房還提供了各種設施，如舒適的床鋪、豪華浴室和私人陽台，讓您的住宿更加舒適和愉快。在濟州島山景套房中，您可以體驗到當地的風土人情，並且透過窗戶欣賞到島上獨特而美麗的自然風光，讓您的旅程更加難忘。",
    price: "5,689",
  },
];
const Catgory = () => {
  return (
    <div>
      <div className="Catgorycontainer">
        <div className="left">React大旅店房型</div>
        <div className="right">
          {/* <Link
            to="room1"
            state={{
              img: photo,
              title: info[0].title,
              location: info[0].location,
              adj1: info[0].adj1,
              adj2: info[0].adj2,
              adj3: info[0].adj3,
              adj4: info[0].adj4,
            }}
          >
            <Card img={info[0].img} />
          </Link>

          <Link
            to="room2"
            state={{
              img: photo2,
              title: info[1].title,
              location: info[1].location,
              adj1: info[1].adj1,
              adj2: info[1].adj2,
              adj3: info[1].adj3,
              adj4: info[1].adj4,
            }}
          >
            <Card img={info[1].img} />
          </Link>
          <Link to="room3" state={{ img: photo3, title: info[2].title }}>
            <Card img={info[2].img} />
          </Link>
          <Link to="room4" state={{ img: photo4, title: info[3].title }}>
            <Card img={info[3].img} />
          </Link>
          <Link to="room5" state={{ img: photo5, title: info[4].title }}>
            <Card img={info[4].img} />
          </Link>
          <Link to="room6" state={{ img: photo6, title: info[5].title }}>
            <Card img={info[5].img} />
          </Link> */}
          {info.map((room, index) => (
            <Link
              key={index}
              to={`room${index + 1}`}
              state={{
                img: room.img,
                title: room.title,
                location: room.location,
                adj1: room.adj1,
                adj2: room.adj2,
                adj3: room.adj3,
                adj4: room.adj4,
                desc: room.desc,
                price: room.price,
              }}
            >
              <Card img={room.img} />
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Catgory;
