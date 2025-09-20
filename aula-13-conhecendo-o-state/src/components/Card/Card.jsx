import { useState } from "react"
import LinkButton from "../LinkButton/LinkButton"
import Title from "../Title/Title"
import styles from "./Card.module.css"
import ProfileSection from "./ProfileSection/ProfileSection"

export default function Card({
  imgProfile,
  name,
  bio,
  phone,
  email,
  githubUrl,
  linkedinUrl,
  twitterUrl,
}) {

  // primeiro elemento do state é o valor e o segundo é a função que modifica esse valor

  const [followText, setFollowText] = useState("Follow")

  function handleClick(ev) {
    alert("Você agora está seguindo!")
    setFollowText('Following')
  }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={imgProfile} alt={name} />
      <Title>
        <span>{name}</span>
        <button onClick={handleClick} className={styles.followButton}>
          {followText}
        </button>
      </Title>
      <ProfileSection>{bio}</ProfileSection>
      <ProfileSection>{phone}</ProfileSection>
      <ProfileSection>{email}</ProfileSection>
      <ProfileSection
        className={styles.links}
        id="links-section"
        data-test="some value"
        aria-label="social links"
      >
        <LinkButton href={githubUrl} target="_blank">
          GitHub
        </LinkButton>
        <LinkButton href={linkedinUrl} target="_blank">
          LinkedIn
        </LinkButton>
        <LinkButton href={twitterUrl} target="_blank">
          Twitter
        </LinkButton>
      </ProfileSection>
    </div>
  )
}
