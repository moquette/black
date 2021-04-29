export const Contact = (props) => {
  const data = props.data.contact;
  return (
    <section id={data.id} className={data.id + ' ' + data.classes}>
      <div className="container">
        <h2 className="section-title">{data.title}</h2>
        <div className="row g-3 pt-3">
          <div className="col">
            <form
              className="php-email-form"
              action="forms/contact.php"
              method="post"
              data-aos="fade-up"
            >
              <div className="form-group mt-3">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-group mt-3 float-end">
                <button className="btn btn-dark" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
