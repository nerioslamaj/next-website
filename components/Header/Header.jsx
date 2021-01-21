import React, { useEffect } from 'react'
import './Header.scss'

export const Header = () => {
  const handleMenuClick = page => {
    console.log(page)
  }

  const items = [
    'Working',
    'Writing',
    'Reading',
  ]

  return (
    <header className='NL-Row'>
      <div className='NL-Container Inner-Menu'>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 198.999 29.999" enableBackground="new 0 0 198.999 29.999" xmlSpace="preserve">
          <path fillRule="evenodd" clipRule="evenodd" d="M194.063,23.759c-2.137,0-3.316-1.291-3.733-1.802
            c-0.122-0.194-0.099-0.438,0.05-0.608l0.516-0.584c0.393-0.365,0.589-0.195,0.834,0.072c0.418,0.463,1.303,1.291,2.383,1.291
            c1.474,0,2.996-1.071,2.996-3.651V6.938c0-0.243,0.197-0.463,0.467-0.463h0.957c0.271,0,0.467,0.22,0.467,0.463v11.489
            C198.999,21.812,196.937,23.759,194.063,23.759z M189.276,23.515h-0.982c-0.222,0-0.369-0.146-0.418-0.268l-1.817-4.016h-8.718
            l-1.793,4.016c-0.049,0.121-0.197,0.268-0.418,0.268h-0.982c-0.368,0-0.564-0.316-0.417-0.633L181.196,6.5
            c0.073-0.146,0.196-0.268,0.418-0.268h0.245c0.221,0,0.344,0.122,0.417,0.268l7.417,16.382
            C189.841,23.198,189.645,23.515,189.276,23.515z M181.81,9.738h-0.195l-3.586,7.984h7.367
            C184.192,15.068,183.013,12.391,181.81,9.738z M171.865,23.515h-0.982c-0.196,0-0.394-0.17-0.442-0.341l-2.186-12.536
            c-0.024,0-0.074,0-0.098,0l-4.52,12.852c-0.049,0.146-0.27,0.269-0.417,0.269h-0.442c-0.146,0-0.368-0.122-0.418-0.269
            l-4.567-12.852c-0.024,0-0.073,0-0.099,0l-2.137,12.536c-0.023,0.171-0.245,0.341-0.441,0.341h-0.982
            c-0.368,0-0.516-0.243-0.441-0.584l3.168-16.357c0.049-0.194,0.245-0.341,0.441-0.341h0.393c0.172,0,0.369,0.122,0.418,0.268
            l4.863,13.412c0.049,0,0.073,0,0.122,0L167.887,6.5c0.049-0.146,0.245-0.268,0.417-0.268h0.394c0.196,0,0.393,0.146,0.442,0.341
            l3.168,16.357C172.381,23.271,172.233,23.515,171.865,23.515z M151.827,23.515h-0.982c-0.222,0-0.369-0.146-0.418-0.268
            l-1.817-4.016h-8.718l-1.793,4.016c-0.049,0.121-0.197,0.268-0.418,0.268h-0.982c-0.368,0-0.564-0.316-0.418-0.633L143.747,6.5
            c0.073-0.146,0.196-0.268,0.417-0.268h0.245c0.222,0,0.345,0.122,0.418,0.268l7.417,16.382
            C152.392,23.198,152.194,23.515,151.827,23.515z M144.36,9.738h-0.196l-3.585,7.984h7.367
            C146.743,15.068,145.563,12.391,144.36,9.738z M134.784,23.515h-8.498c-0.27,0-0.466-0.219-0.466-0.462V6.938
            c0-0.243,0.196-0.463,0.466-0.463h0.959c0.245,0,0.466,0.22,0.466,0.463v14.945h7.073c0.27,0,0.467,0.219,0.467,0.463v0.706
            C135.251,23.296,135.054,23.515,134.784,23.515z M122.433,18.72c0,2.507-2.186,5.039-5.797,5.039c-3.191,0-4.961-1.314-5.525-1.875
            c-0.245-0.243-0.318-0.341-0.123-0.682l1.154-2.02c0.197-0.317,0.664-0.269,0.836-0.146c0.098,0.049,1.865,1.339,3.486,1.339
            c0.982,0,1.695-0.608,1.695-1.461c0-1.022-0.859-1.801-2.529-2.458c-2.112-0.828-4.765-2.458-4.765-5.38
            c0-2.409,1.891-4.844,5.673-4.844c2.555,0,4.519,1.29,5.256,1.826c0.295,0.17,0.245,0.608,0.146,0.778l-1.252,1.875
            c-0.172,0.268-0.613,0.487-0.835,0.316c-0.222-0.122-2.014-1.46-3.512-1.46c-0.884,0-1.548,0.584-1.548,1.241
            c0,0.9,0.737,1.582,2.678,2.361C119.387,13.924,122.433,15.409,122.433,18.72z M100.159,23.759c-4.912,0-8.816-3.871-8.816-8.739
            s3.905-8.787,8.816-8.787c4.912,0,8.841,3.919,8.841,8.787S105.071,23.759,100.159,23.759z M100.159,10.127
            c-2.677,0-4.887,2.215-4.887,4.893c0,2.653,2.21,4.845,4.887,4.845c2.701,0,4.912-2.191,4.912-4.845
            C105.071,12.342,102.86,10.127,100.159,10.127z M87.905,23.515h-2.947c-0.246,0-0.466-0.219-0.466-0.462V6.938
            c0-0.243,0.221-0.463,0.466-0.463h2.947c0.246,0,0.466,0.22,0.466,0.463v16.114C88.372,23.296,88.151,23.515,87.905,23.515z
            M80.932,22.81c0.172,0.316,0,0.705-0.417,0.705h-3.266c-0.197,0-0.344-0.121-0.393-0.219l-3.266-6.45h-1.695v6.207
            c0,0.243-0.221,0.462-0.467,0.462h-2.922c-0.27,0-0.466-0.219-0.466-0.462V6.938c0-0.243,0.196-0.463,0.466-0.463h7.343
            c2.947,0,5.354,2.361,5.354,5.258c0,2.24-1.498,4.041-3.635,4.893L80.932,22.81z M75.529,9.957h-3.635v3.797h3.635
            c1.007,0,1.867-0.925,1.867-1.947S76.536,9.957,75.529,9.957z M64.282,23.515H54.115c-0.271,0-0.467-0.219-0.467-0.462V6.938
            c0-0.243,0.196-0.463,0.467-0.463h10.167c0.271,0,0.467,0.22,0.467,0.463v2.653c0,0.243-0.196,0.462-0.467,0.462h-6.803v3.018h5.6
            c0.246,0,0.466,0.219,0.466,0.463v2.653c0,0.268-0.221,0.462-0.466,0.462h-5.6v3.286h6.803c0.271,0,0.467,0.22,0.467,0.463v2.653
            C64.749,23.296,64.552,23.515,64.282,23.515z M48.958,23.759h-0.393c-0.073,0-0.27-0.074-0.319-0.122l-9.701-9.664h-0.024v9.08
            c0,0.243-0.197,0.462-0.467,0.462h-2.922c-0.246,0-0.467-0.219-0.467-0.462L34.641,6.671c0-0.244,0.221-0.438,0.466-0.438h0.614
            l9.799,9.347h0.024V6.938c0-0.243,0.196-0.463,0.467-0.463h2.947c0.246,0,0.467,0.22,0.467,0.463V23.32
            C49.425,23.563,49.204,23.759,48.958,23.759z M0,0h30.684v29.999H0V0z M3.938,8.375v17.774h5.258V8.991h12.337v17.159h5.213V8.991
            h-5.213v-5.14H8.566H3.938V8.375z">
          </path>
        </svg>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.toLowerCase()}>
                <a className='NL-No-Txt-Dec' href={item.toLowerCase()} onClick={handleMenuClick(item.toLowerCase())}>{item}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

export default Header
