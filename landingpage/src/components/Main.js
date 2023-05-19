function Main() {
  return (
    <div className="main">
      <div className="menu">
        <div className="logo">
          <h3>Celio</h3>
        </div>
        <div className="item-menu">
          <a href="/">Login</a>
        </div>
      </div>

      <div className="form">
        <form>
          <h2 className="texto">Entre em Contato! </h2>
          <div className="items-form">
            <input placeholder="Seu nome..." type="text" />
            <input placeholder="Seu nome..." type="text" />
            <input placeholder="Seu nome..." type="text" />
            <input placeholder="Seu nome..." type="text" />
            <input placeholder="Seu nome..." type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Main;
