import { render, screen } from "@testing-library/react"
import { GifItem } from "../components/GifItem"

describe('Pruebas en GiftItem', () => { 

  const title = 'one punch';
  const url = 'https://media0.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=26ecf56anf7vnosp5b0g7gnwaeo8vynqkwpues9v1515o4k3&rid=giphy.gif&ct=g%22';

  test('Debe hacer match con el snapshot', () => { 

    const {container} = render(<GifItem title={title} url={url} />)

    expect(container).toMatchSnapshot();

  })

  test('Debe haber un parrafo con titulo', () => { 

    render(<GifItem title={title} url={url} />)

    expect(screen.getByText(title)).toBeTruthy();

  })
  
  test('Debe haber url y title en img', () => { 

    render(<GifItem title={title} url={url} />)

    // screen.debug();

    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);
    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);

  })
  

})