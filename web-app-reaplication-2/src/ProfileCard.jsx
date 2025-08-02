function ProfileCard(props) {
  const { img, firstName, lastName, jobTitle, description } = props;
  return (
    <div className="profile-card">
      <div className="card-header">
        <img src={img} alt={`${firstName} ${lastName}`} />
        <h3>{jobTitle}</h3>
      </div>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default ProfileCard;
