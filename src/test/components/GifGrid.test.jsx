import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock( "../../hooks/useFetchGifs" );


describe('Pruebas en GifGrid.jsx', () => {

    const category = 'One Ponch';

    test('debe de mostrar el loading inicial ', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category= {category} />);
        //screen.debug();
        expect (screen.getByText('Cargando...'));
        expect (screen.getByText(category));

      
    });

    test('debe de mostar items cuando se cargan las imagenes useFetchGifs ', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jgp'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jgp'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render( <GifGrid category= {category} />);
        //screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);

      
    })
    
    

  
})
