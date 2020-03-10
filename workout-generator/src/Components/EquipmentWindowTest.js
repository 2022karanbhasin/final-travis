import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EquipmentForm from './EquipmentForm';
import EquipWindow from './EquipWindow'
import App from '../App'

test('renders learn react link', () => {
    const {getByTestId} = render(<EquipWindow name={"Karan"}/>)
    const {getByTestId} = render(<EquipWindow name={"Karan"} description={"Greeting"}/>)
    const headerVal = getByTestId('testID');
    expect(headerVal.textContent).toBe(temp);

    const temp = getByTestId('theDescriptionID');
    expect(temp.textContent).toBe("Greeting");


}); 