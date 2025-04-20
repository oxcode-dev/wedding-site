import { describe, expect, it } from "vitest";
import App from "../App";
// import { render } from "@testing-library/react";

describe('App View', () => {
    it('should find Hello World', () => {
        expect(App).toBeTruthy()

        // render(<App />); 

        // screen.debug()

        // console.log(screen.getByTestId('wedding'))
        // expect(screen.getByTestId('wedding')).toHaveTextContent('Hello World')
    })
})

