import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../GifExpertApp"

describe('Pruebas en GifExpertApp', () => { 
    test('debe ignorar la categoria si ya existe', () => { 
        render(<GifExpertApp />)

        screen.debug()
    })
})