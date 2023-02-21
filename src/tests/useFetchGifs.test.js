import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../hooks/useFetchGifs"

describe('Prebas en useFetchGifs', () => { 

  test('debe retornar el estado inicial', () => { 
    const { result } = renderHook( () => useFetchGifs('One Punch') );

    const { images, isLoading } = result.current;

    expect( images ).toEqual([]);
    expect( isLoading ).toBe(true);

  })

  test('debe retornar el arreglo con imagenes y el isLoading en false', async() => { 

    const { result } = renderHook( () => useFetchGifs('One Punch') );

    await waitFor( 
        () => expect( result.current.images.length ).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();

  })

})





// test('Debe de retornar el estado inicial', async() => {
//     const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
//     const { data, loading } = result.current;

//     await waitForNextUpdate();

//     expect( data ).toEqual([]);
//     expect( loading ).toBe(true);
// })

// test('Debe de retornar un arreglo de imgs y el loading en false', async() => {
//     const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
//     await waitForNextUpdate();

//     const { data, loading } = result.current;

//     expect( data.length ).toBe( 10 );
//     expect( loading ).toBe(false);
// })