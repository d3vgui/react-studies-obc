import LinkButton from '../LinkButton/LinkButton'
import Title from '../Title/Title'
import styles from './Card.module.css'
import ProfileSection from './ProfileSection/ProfileSection'

export default function Card({imgProfile, name, bio, phone, email, githubUrl, linkedinUrl, twitterUrl}) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={imgProfile} alt={name} />
      <Title>
        <span>{name}</span>
        <button>Follow</button>
      </Title>
      <ProfileSection>{bio}</ProfileSection>
      <ProfileSection>{phone}</ProfileSection>
      <ProfileSection>{email}</ProfileSection>
      <ProfileSection className={styles.links}>
        <div className={styles.links}>
          <LinkButton href={githubUrl} target="_blank">GitHub</LinkButton>
          <LinkButton href={linkedinUrl} target="_blank">LinkedIn</LinkButton>
          <LinkButton href={twitterUrl} target="_blank">Twitter</LinkButton>
        </div>
      </ProfileSection>
    </div>
  )
}