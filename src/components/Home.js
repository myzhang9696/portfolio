const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Introduction</h3>
            <h3 className="title">Miaoyan Zhang</h3>
            <p className="desc">
            Hi~ My name is Miaoyan Zhang, currently a Computer Science student at 
            the University of Pennsylvania. I have one year of full-time Software 
            Engineer work experience and I'm now looking for 2022 summer SDE internship.
            </p>
            <img src="img/Miaoyan_Zhang_cocosign.png" alt="image" />
          </div>
          {/* /Main Title */}
        </div>
      </div>
    </section>
  );
};

export default Home;
