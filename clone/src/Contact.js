import { useState } from "react";
const Contact = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title);
  };
  return (
    <>
      <section className="contact" id="contact">
        <h2>Veuillez vous inscrire a la newsletter</h2>
        <form action="" className="form-group" onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="name">Enter your name</label>
            <input
              type="text"
              name=""
              id="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              
            />
          </div>
          <div className="">
            <label htmlFor="email">Enter your email</label>
            <input type="email" name="" id="email" />
          </div>
          <div className="">
            <label htmlFor="">Laisser un message</label>
            <textarea name="" id=""></textarea>
          </div>
          <div className="">
            <button type="submit">Envoyer</button>
          </div>
          <p>{title}</p>
        </form>
      </section>
    </>
  );
};

export default Contact;
