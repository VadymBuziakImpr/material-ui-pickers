import React, { Fragment, useState } from 'react';
import { DatePicker, KeyboardDatePicker } from '@material-ui/pickers';

const monthsToDisable = [1,3,5,7]

function InlineDatePickerDemo(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <DatePicker
        variant="inline"
        label="Basic example"
        value={selectedDate}
        onChange={handleDateChange}
      />

      <DatePicker
        disableToolbar
        variant="inline"
        label="Only calendar"
        helperText="No year selection"
        shouldDisableMonth={(date) => monthsToDisable.includes(date.getMonth())}
        value={selectedDate}
        onChange={handleDateChange}
      />

      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="With keyboard"
        format={props.__willBeReplacedGetFormatString({
          moment: 'MM/DD/YYYY',
          dateFns: 'MM/dd/yyyy',
        })}
        value={selectedDate}
        InputAdornmentProps={{ position: 'start' }}
        onChange={date => handleDateChange(date)}
      />
    </Fragment>
  );
}

export default InlineDatePickerDemo;
