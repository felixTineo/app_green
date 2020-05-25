const uuid = require('uuid/v1');

const users = [
  {
    _id: uuid(),
    url: `/perfil/${uuid()}`,
    name: 'felix',
    lastName: 'tineo',
    fullName: 'felix tineo',
    perfilImg: require('../../assets/images/persons/person-0.jpg'),
  },
  {
    _id: uuid(),
    url: `/perfil/${uuid()}`,
    name: 'sam',
    lastName: 'ganya',
    fullName: 'sam ganya',
    perfilImg: require('../../assets/images/persons/person-1.jpg'),
  },
  {
    _id: uuid(),
    url: `/perfil/${uuid()}`,
    name: 'jhon',
    lastName: 'doe',
    fullName: 'jhon doe',
    perfilImg: require('../../assets/images/persons/person-2.jpg'),
  },
  {
    _id: uuid(),
    url: `/perfil/${uuid()}`,
    name: 'anne',
    lastName: 'fire',
    fullName: 'anne fire',
    perfilImg: require('../../assets/images/persons/person-3.jpg'),
  },
  {
    _id: uuid(),
    url: `/perfil/${uuid()}`,
    name: 'lisa',
    lastName: 'water',
    fullName: 'lisa water',
    perfilImg: require('../../assets/images/persons/person-4.jpg'),
  },
  {
    _id: uuid(),
    url: `/perfil/${uuid()}`,
    name: 'star',
    lastName: 'green',
    fullName: 'star green',
    perfilImg: require('../../assets/images/persons/person-5.jpg'),
  },
  {
    _id: uuid(),
    url: `/perfil/${uuid()}`,
    name: 'bella',
    lastName: 'donna',
    fullName: 'bella donna',
    perfilImg: require('../../assets/images/persons/person-6.jpg'),
  },
  {
    _id: uuid(),
    url: `/perfil/${uuid()}`,
    name: 'rachel',
    lastName: 'wind',
    fullName: 'rachel wind',
    perfilImg: require('../../assets/images/persons/person-7.jpg'),
  },
]

module.exports = users;