import styles from "./ProfileSection.module.css"

export default function ProfileSection({children, className, ...rest}) {
  return (
    <div 
        {...rest} 
        className={`${styles.wrapper} ${className}`}>
      {children}
    </div>
  )
}
