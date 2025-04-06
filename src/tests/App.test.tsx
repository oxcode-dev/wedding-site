import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe('App View', () => {
    it('should find Hello World', () => {
        expect(App).toBeTruthy()

        // render(<App />); 

        // screen.debug()

        console.log(screen.getByTestId('wedding'))
        // expect(screen.getByTestId('wedding')).toHaveTextContent('Hello World')
    })
})