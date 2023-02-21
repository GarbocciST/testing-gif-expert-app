import { render, screen } from "@testing-library/react"
import { GifGrid } from "../components/GifGrid"
import { useFetchGifs } from "../hooks/useFetchGifs"

jest.mock('../hooks/useFetchGifs')

describe('Pruebas en GifGrid', () => { 
    
    const category = 'One Pucnh'

    test('debe mostar el logo de cargando', () => { 
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)
        // screen.debug();
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    })

    test('debe mostar el logo de cargando', () => { 
        
        useFetchGifs.mockReturnValue({
            images: [
                {
                    id: 'ABC',
                    title: 'Saitama',
                    url: 'https://localhost/saitama.jpg'
                },
                {
                    id: '123',
                    title: 'Genos',
                    url: 'https://localhost/genos.jpg'
                }
            ],
            isLoading: true
        })

        render(<GifGrid category={category} />)
        // screen.debug();
        const img = screen.getAllByRole('img');

        expect(img.length).toBe(2);
        expect(img[0].alt).toBe('Saitama');

    })



})