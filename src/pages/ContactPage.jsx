import React from 'react'
import { useLoaderData } from 'react-router-dom'

function ContactPage() {

  const contacts=useLoaderData();
  console.log(contacts)

  return (
    <div className='text-4xl '>
      Contact Page
      <img src='https://picsum.photos/id/239/400/300' alt='ดอกไม้' />
      <hr />
      <ul>
      {contacts.map((contact)=>(
      <li key={contact.id}>
        {contact.id}: {contact.title}
        </li>
      ))}
      </ul>
    </div>
  )
}

export default ContactPage
