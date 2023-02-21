import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../components"

describe('Pruebas en AddCategory', () => { 
   
    test('debe cambiar el valor del input', () => { 
        render(<AddCategory onNewCategory={() => {}} />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Saitama'}});

        expect(input.value).toBe('Saitama');
    })

    
    test('debe reiniciarse el valor del input de ser >= 1 ', () => { 
        
        render( <AddCategory onNewCategory={() => {}} /> );
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, { target: { value: 'Saitama'}});        
        fireEvent.submit( form )

        // screen.debug();
        expect(input.value).toBe('');
    })
    
    test(' no debe enviarse el valor del input de ser <= 1', () => { 

        render( <AddCategory onNewCategory={() => {}} /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'S'}});
        fireEvent.submit( form )
        // screen.debug();
        expect(input.value).toBe('S');
    })

    
})