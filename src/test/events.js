const uuid = require('uuid/v1');

const greenEvents = [
  {
    id: uuid(),
    prim: "#8bb940",
    sec: "#478407",
    img: require('../../assets/images/events/arbol.jpg'),
    title: "Siembra",
    subTitle: "Regalale vida al planeta.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eos obcaecati cupiditate esse vero veniam reiciendis recusandae dolore assumenda ipsam doloribus distinctio rerum, voluptate, veritatis saepe hic. Doloribus nisi, mollitia!"
  },
  {
    id: uuid(),
    prim: "#f03103",
    sec: "#a43112",
    img: require('../../assets/images/events/calido.jpg'),
    title: "Ayuda",
    subTitle: "Las zonas andinas necesitan un corazon calido.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eos obcaecati cupiditate esse vero veniam reiciendis recusandae dolore assumenda ipsam doloribus distinctio rerum, voluptate, veritatis saepe hic. Doloribus nisi, mollitia!"
  },
  {
    id: uuid(),
    prim: "#03a7f0",
    sec: "#1251a4",
    img: require('../../assets/images/events/angel.jpg'),
    title: "Apoya",
    subTitle: "Un angel llega en cualquier forma.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eos obcaecati cupiditate esse vero veniam reiciendis recusandae dolore assumenda ipsam doloribus distinctio rerum, voluptate, veritatis saepe hic. Doloribus nisi, mollitia!"
  }
]

module.exports = greenEvents;
