import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EquipmentForm from './EquipmentForm';
import EquipWindow from './EquipWindow'
import App from '../App'

test('renders learn react link', () => {
    var temp = "Karan"
    const {getByTestId} = render(<EquipWindow name={Name}/>)
    const headerVal = getByTestId('testID');
    expect(headerVal.textContent).toBe(temp);

}); 