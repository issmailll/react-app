const Card = (props) => {
  console.log(props);
  const {user:{first_name, last_name, avatar, id, email }}=props;


  const cardStyle = {
    backgroundColor: 0 ? "red" : "black",
    width: "300px",
    textAlign: "center",
    color: 0 ? "black" : "#fff",
    minHeight: "200px",
    marginBottom: "10px",
  };

  return (
    <>
      <div className="card" style={cardStyle}>
        <img
          className="card__img"
          src={avatar}
          alt="users_images"
        />
        <h2 className="card__title">{first_name} {last_name}</h2>
        <p className="card__text">
          {email}
        </p>
        <p className="card__id">{id}</p>
      </div>
    </>
  );
};
export default Card;
