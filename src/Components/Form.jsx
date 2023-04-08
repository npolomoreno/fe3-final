import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [user, setUser] = useState ({
    name: '',
    email: ''
  })

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)
  

  const handleSubmit = (event) =>{
    event.preventDefault()
    if(user.name.length !== 0 && user.email.length !== 0){
      setShow(true)
      setErr(false)
      
    }else{
      setShow(false)
      setErr(true)
      
    }

    if(user.name.length > 5){
      setShow(true)
      setErr(false)
    }else{
        setShow(false)
        setErr(true)
    }
    
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input  data-testid="noNumbers" placeholder="Full Name" type="text" onChange={(event) => setUser({...user, name: event.target.value})}/>
        <input  type="email" placeholder="Email" onChange={(event) => setUser({...user, email: event.target.value})}/>
        <button>Send</button>
      </form>

      {show ? <><h4> {user.name}, pronto recibirás nuestro email ! </h4></> : null}
      {err ? 'Por favor verifique su información nuevamente.' : null}

    </div>
  );
};

export default Form;