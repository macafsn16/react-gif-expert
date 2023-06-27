import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components";

describe('prieba en GifItem', () => {

    const title = 'Saitama';
    const url = 'https://ono-punch.com/saitama.jgp'
    
  
    test('debe de hacer match con el snapshot ', () => {
      
        const {container} = render( <GifItem title={title} url={url}  /> );

        expect ( container ).toMatchSnapshot();
    });
    

test('debe de mostar la imagen con el URL y el ALT indicado ', () => {

    render( <GifItem title={ title } url={ url }  /> );

   //screen.debug();
    //expect( screen.getByRole('img').src ).toBe(url);
    //expect( screen.getByRole('img').alt ).toBe(title);
   //console.log(screen.getByRole('img'));

   const { src, alt } = screen.getByRole('img');
   expect ( src ).toBe( url );
   expect ( alt ).toBe( alt );

});

test('debe mostar el titulo en el componente ', () => {

    render( <GifItem title={ title } url={ url }  /> );
    expect( screen.getByText(  title) ).toBeTruthy();
  
});




});


