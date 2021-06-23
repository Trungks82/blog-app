import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div clasName='profile-top bg-primary p-2'>
      <img clasName='round-img my-1' src={avatar} alt='' />
      <h1 clasName='large'>{name}</h1>
      <p clasName='lead'>
        {status} {company && <span> at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div clasName='icons my-1'>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <i clasName='fas fa-globe fa-2x'></i>
          </a>
        )}
        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i clasName='fab fa-twitter fa-2x' />
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <i clasName='fab fa-facebook fa-2x'></i>
          </a>
        )}
        {social && social.linkedin && (
          <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
            <i clasName='fab fa-linkedin fa-2x'></i>
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
