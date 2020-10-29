export default function Header({logo, items}) {
  return (
    <div>
      <img src={ logo.file.url } />
      <ul>
        {items.map((item) => {
          return (
            <li>
              <a href={ item.toLowerCase() }>{ item }</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
