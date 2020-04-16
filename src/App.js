import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id' : 1,
  'image' : "https://placeimg.com/64/64/any",
  'name' : '홍길동',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '중학생'
  },
  {
    'id' : 2,
    'image' : "https://placeimg.com/64/64/1",
    'name' : '김예찬',
    'birthday' : '001223',
    'gender' : '남자',
    'job' : '대학생'
    },
    {
      'id' : 3,
      'image' : "https://placeimg.com/64/64/2",
      'name' : '김예준',
      'birthday' : '021020',
      'gender' : '남자',
      'job' : '고등학생'
      }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          })
        }
      </div>
    );
  }
}

export default App;
