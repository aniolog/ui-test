import { Review, Menu, Calculator } from "../types";

export type AppState = {
    testimonialTitle: string,
    reviews: Array<Review>,
    selectedReviewIndex: number,
    menu: Menu,
    calculatorTitle: string,
    calculatorDescription: string,   
}