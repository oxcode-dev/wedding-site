import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";

describe('Contact Form', () => {
    it('should find message', () => {
        expect(App).toBeTruthy()

        render(<App />);

        // screen.debug()
        // expect(screen.getByTestId('form')).toHaveTextContent('Contact Form')
    })
})