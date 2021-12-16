import Card from "./index";
import { ThemeProvider } from "../../utils/context";
import {render, screen} from "@testing-library/react"

test.only('Card picture', async ()=>{
    render(
        <ThemeProvider>
            <Card
                label="Magicien front end"
                title="Harry le Potier"
                picture="/cat_100.jpg"
            />
        </ThemeProvider>        
    )
    const cardPicture = screen.getByRole("img")
    expect(cardPicture.src).toBe("http://localhost/cat_100.jpg")
    const cardTitle = screen.getByText(/Harry/)
    expect(cardTitle.textContent).toBe("Harry le Potier")
})