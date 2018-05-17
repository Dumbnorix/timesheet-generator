import React from 'react';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('should accept a valid name', () => {
  const validName = 'Alexander Bush';
  const error = App.prototype.validateName(validName);
  expect(error).toEqual({});
});

it('should require a name', () => {
  const error = App.prototype.validateName();
  expect(error).toEqual({error: 'Name is required.'})
});

it('should accept a valid job title', () => {
    const validTitle = 'Software Engineer';
    const error = App.prototype.validateTitle(validTitle);
    expect(error).toEqual({});
});

it('should require a job title', () => {
    const error = App.prototype.validateTitle();
    expect(error).toEqual({error: 'Title is required.'})
});

it('should reject an end date that is before the start date', () => {
  const startDate = new Date(),
      endDate = new Date();
  startDate.setHours(endDate.getHours()+2);
  const error = App.prototype.isEndDateAfterStartDate(startDate, endDate);
  expect(error).toEqual({error: 'End date needs to be after start date.'})
});

it('should reject a form that is incomplete', () => {
    const wrapper = shallow(<App />);
    // const boolean = App.prototype.isFormComplete();
    // expect(boolean).toEqual(true);
});