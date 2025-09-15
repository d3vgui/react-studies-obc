import { Fragment } from "react"
import Card from "./components/Card/Card.jsx"
import bnhPoster from './assets/img-1.jpg'
import knyPoster from './assets/img-2.jpg'
import bcPoster from './assets/img-3.jpg'

export default function Container(){
  return (
    <Fragment>
      <h2>Conhecendo as Props</h2>
      <Card title='My Hero Academia (2014)' posterImg={bnhPoster}
      text='Boku no Hero Academia é sobre um garoto sem poderes em um mundo onde quase todos os têm. Ele herda uma força extraordinária de seu maior ídolo e entra em uma academia de elite para aprender a lutar contra vilões e se tornar um verdadeiro herói.'
      />

      <Card title='Demon Slayer (2016)' posterImg={knyPoster} 
      text='"Demon Slayer: Kimetsu no Yaiba" acompanha a jornada de Tanjiro Kamado, um jovem que se torna um caçador de demônios após sua família ser massacrada e sua irmã, Nezuko, ser transformada em um deles.'/>

      <Card title='Black Clover (2015)' posterImg={bcPoster}
      text='"Black Clover" acompanha a jornada de Asta, um jovem órfão que nasceu sem qualquer poder mágico em um mundo onde a magia é tudo. Sonhando em se tornar o Rei Mago, o mais forte do reino, ele supera sua desvantagem com um treinamento físico intenso e um grimório raro que lhe concede o poder da anti-magia.'
      />
    </Fragment>
  )
}