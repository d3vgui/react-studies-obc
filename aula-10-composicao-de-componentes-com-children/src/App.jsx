import Card from "./components/Card/Card";
import img from './assets/img.webp'
import './styles/settings.css'

export default function Container(){
  return (
    <div className="app">
      <Card
        imgProfile={img}
        name='Izuku Midoriya'
        bio='Fullstack Developer at Bradesco'
        phone='+55 99 99999-9999'
        email='izukumidoriya@email.com'
        githubUrl='https://github.com/d3vgui'
        linkedinUrl='https://www.linkedin.com/in/gu1d3v/'
        twitterUrl='https://x.com/'
      />
    </div>
  )
}