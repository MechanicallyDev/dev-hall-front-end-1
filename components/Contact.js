import styles from './Contact.module.css'
import { useState } from 'react'

import { TelephoneInput } from '../components/Inputs'

export default function Contact() {
  const [name, setName] = useState('')
  const [telephone, setTelephone] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (name && telephone) {
      alert(
        `Obrigado pelo contato, ${name}.\nEntraremos em contato pelo telephone ${telephone} assim que possível.`
      )
      setName('')
      setTelephone('')
    } else {
      alert('Por favor, preencha todos os campos')
    }
  }

  return (
    <div id='Contato' className={styles.contact}>
      <div>
        <h3>Mande um oi, ligamos para você!</h3>
        <p>Preencha seus dados para que a gente possa entrar em contato.</p>
        <form>
          <div className={styles.fields}>
            <p>
              <label>Nome Completo</label>
              <input
                type='text'
                placeholder='Ex: Mateus Ávila Isidoro'
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </p>
            <p>
              <label>Whatsapp</label>
              <TelephoneInput
                placeholder='(99) 99999-9999'
                value={telephone}
                onChange={e => setTelephone(e.target.value)}
                required
              />
            </p>
            <p>
              <button onClick={handleSubmit}>Peça uma reunião</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
