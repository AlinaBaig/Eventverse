import { render,fireEvent } from '@testing-library/react';
import {Search } from "../components/Navbar";
import { exportAllDeclaration } from '@babel/types';

it("renders corretly", () =>{
    const {queryByTestId,queryByPlaceHolderName}=render(Search);
    exportAllDeclaration(queryByTestId("search-bar-container")).toBeTruthy()
})
