import { getGifs } from "../helpers/getGifs";

describe('Pruebas en getGifs', () => { 


    test('la funcion getGifs debe retornar un objeto con id, title y url ', async() => { 

        const gifs = await getGifs('One Punch');

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
        


    })
})

