import ReactDOM from 'react-dom'

export const createContainer = () => {
  const container = document.createElement('div')
  const render = component => ReactDOM.render(component, container)

  return {
    render,
    container
  }
}
