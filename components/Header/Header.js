import './Header.scss'

export default function Header({logo, items}) {
  return (
    <div className="main-header">
      <img src={ logo.file.url } />
      <ul>
        {items.map((item) => {
          return (
            <li key={ item.toLowerCase() }>
              <a href={ item.toLowerCase() }>{ item }</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
