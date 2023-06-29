import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useFetchGifs"


describe('Pruebas en useFetchGifs.jsx', () => {

    test('debe de regresar el estado inicial ', () => {
        
        const { result } = renderHook( ()=> useFetchGifs('One Ponch') );
        const { images, isLoading } = result.current;

        expect ( images.length ).toBe(0);
        expect ( isLoading ).toBeTruthy();
        
      
    });

   
    test('debe de retornar un arreglo de imagen u isLoding en false ', async() => {
        
        const { result } = renderHook( ()=> useFetchGifs('One Ponch') );
        await waitFor(
            () => expect ( result.current.images.length ).toBeGreaterThan(0)
            );


        const { images, isLoading } = result.current;

        expect ( images.length ).toBeGreaterThan(0);
        expect ( isLoading ).toBeFalsy();
      
    });
    
    
  
})
