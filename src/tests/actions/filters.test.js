import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate  } from '../../actions/filters';
import moment from 'moment';

test('should generate set text filter action object with text value', () => {
  const action = setTextFilter('some text');
  expect(action).toEqual({
    type: 'SET_EXPENSE',
    text: 'some text'
  });
});

test('should setup text filter action object w/ default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_EXPENSE',
    text: ''
  });
});

test('should setup sort by amount filter action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({type: 'SORT_BY_AMOUNT'});
});

test('should setup sort by date filter action object', () => {
  const action = sortByDate();
  expect(action).toEqual({type: 'SORT_BY_DATE'});
});

test('should generate set start date filter action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('should generate set end date filter action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});
