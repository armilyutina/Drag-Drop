import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal'


const Sundbox = () => {

  const [active, setActive] = useState(true)

  return(
      <section>
          <button onClick = {() => setActive(true)}>Click me</button>
          <Modal active = {active} setActive = {setActive}>
            lorem console.log(require('util').inspect(askdlaksjd loremrel asdlkaj skdjl
            <div><input /></div>
            <div><input /></div>
            <div><input /></div>
            <div><button/></div>


          </Modal>
      </section>
  );
}



ReactDOM.render(<Sundbox />, document.getElementById('modal'))
