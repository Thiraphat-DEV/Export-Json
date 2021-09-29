import React from 'react'
import users from './user.json'
import './App.css'

const downloadFile = ({data, filename, filetype}) => {
  const blob = new Blob([data], {type: filetype})

  const aEle = document.createElement('a')
  a.download = filename;
  a.href = window.URL.createObjectURL(blob)

  const click = new MouseEvent('click', {
    view: window, 
    bubbles: true,
    cancelable: true,
  })

  aEle.dispatchEvent(click)
  aEle.remove()
}

const exportJson =  (e) => {
  e.preventDefault()
  downloadFile({
    data:JSON.stringify(users.users),
    filename: 'user.json',
    filetype: 'text/json'

  })

}

function App() {

  return (
    <div className="App">
      <h1>Thiraphat</h1>

      <table className="userTable">
        <thead>
          <tr>
            <th>ID:</th>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>WEBSITE</th>
          </tr>
        </thead>
        <tbody>
          {users.users.map(user => {
            const {id, name, username, email, phone, website} = user
            return (
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{website}</td>
              </tr>
            )
          })}

        </tbody>
      </table>
      <div>
        <button type="button" onClick={exportJson}>
          Export To JSON
        </button>
      </div>
    </div>
  )
}

export default App
