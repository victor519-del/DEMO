import Fruits from "./components/Fruits";

const fruits = [
  {
    id: 1,
    name: "Apple",
    botanicalName: "Malus domestica",
    imagePath: "https://robohash.org/apple.jpg",
    description: "Apples are crisp, juicy fruits with a sweet and tart flavor. They come in various colors, such as red, green, and yellow.",
    season: "Autumn",
  },
  {
    id: 2,
    name: "Banana",
    botanicalName: "Musa paradisiaca",
    imagePath: "https://robohash.org/banana.jpg",
    description: "Bananas are elongated, curved fruits with a creamy flesh and a distinctive sweet taste. They are rich in potassium and vitamins.",
    season: "Year-round",
  },
  {
    id: 3,
    name: "Orange",
    botanicalName: "Citrus sinensis",
    imagePath: "https://robohash.org/orange.jpg",
    description: "Oranges are round citrus fruits with a bright orange color and a refreshing taste. They are an excellent source of vitamin C.",
    season: "Winter",
  },
  {
    id: 4,
    name: "Mango",
    botanicalName: "Mangifera indica",
    imagePath: "https://robohash.org/mango.jpg",
    description: "Mangoes are tropical fruits with a juicy, fibrous flesh and a sweet taste. They are often called the 'king of fruits.'",
    season: "Summer",
  },
  {
    id: 5,
    name: "Strawberry",
    botanicalName: "Fragaria × ananassa",
    imagePath: "https://robohash.org/strawberry.jpg",
    description: "Strawberries are small, red fruits with a sweet and slightly tangy flavor. They are commonly used in desserts and jams.",
    season: "Spring to early Summer",
  },
  {
    id: 6,
    name: "Grapes",
    botanicalName: "Vitis vinifera",
    imagePath: "https://robohash.org/grapes.jpg",
    description: "Grapes are small, round fruits that grow in clusters. They come in various colors, such as green, red, and purple.",
    season: "Late Summer to early Autumn",
  },
  {
    id: 7,
    name: "Watermelon",
    botanicalName: "Citrullus lanatus",
    imagePath: "https://robohash.org/watermelon.jpg",
    description: "Watermelons are large, juicy fruits with a sweet and refreshing taste. They have a high water content, perfect for hydration.",
    season: "Summer",
  },
  {
    id: 8,
    name: "Pineapple",
    botanicalName: "Ananas comosus",
    imagePath: "https://robohash.org/pineapple.jpg",
    description: "Pineapples are tropical fruits with a sweet and tangy flavor. They have a unique spiky exterior and are rich in vitamins and enzymes.",
    season: "Year-round",
  },
  {
    id: 9,
    name: "Peach",
    botanicalName: "Prunus persica",
    imagePath: "https://robohash.org/peach.jpg",
    description: "Peaches are fuzzy fruits with a juicy, sweet flesh and a delicate aroma. They are commonly eaten fresh or used in desserts.",
    season: "Summer",
  },
  {
    id: 10,
    name: "Kiwi",
    botanicalName: "Actinidia deliciosa",
    imagePath: "https://robohash.org/kiwi.jpg",
    description: "Kiwis aresmall fruits with a fuzzy brown exterior and a bright green flesh. They have a sweet and tangy flavor.",
    season: "Late Autumn to early Spring",
  },
  {
    id: 11,
    name: "Cherry",
    botanicalName: "Prunus avium",
    imagePath: "https://robohash.org/cherry.jpg",
    description: "Cherries are small, round fruits with a sweet and tart flavor. They come in various colors, such as red, yellow, and black.",
    season: "Late Spring to early Summer",
  },
  {
    id: 12,
    name: "Pear",
    botanicalName: "Pyrus communis",
    imagePath: "https://robohash.org/pear.jpg",
    description: "Pears are sweet and juicy fruits with a mild flavor. They have a distinctive pear shape and come in various colors, such as green and red.",
    season: "Late Summer to early Autumn",
  },
];



export default function page() {
  return (
    <div >
      <Fruits list = {fruits}/>
    </div>
  )
}
