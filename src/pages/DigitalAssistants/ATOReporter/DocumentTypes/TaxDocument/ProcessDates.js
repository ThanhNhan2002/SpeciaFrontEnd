
import { React, useState, useEffect } from 'react'

import dayjs from 'dayjs';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { ThemeProvider, createTheme } from '@mui/material/styles';



export default (props) => {
    
    console.log(props.request)

    const [startDate, setStartDate] = useState(props.request.processStartDate)

    const [endDate, setEndDate] = useState(props.request.processEndDate)

    function updatePeriod(dates){

        let startDate = null

        let endDate = null

        if (dates[1] != null && dates[0] != null){
            startDate = `${dates[0].$y}-${(dates[0].$M+1)}-${dates[0].$D}`
            endDate = `${dates[1].$y}-${(dates[1].$M+1)}-${dates[1].$D}`
        }else if (dates[0] != null && dates[1] == null){
            startDate = `${dates[0].$y}-${(dates[0].$M+1)}-${dates[0].$D}`
        }else if (dates[0] == null && dates[1] != null){
            endDate = `${dates[1].$y}-${(dates[1].$M+1)}-${dates[1].$D}`
        }

        setStartDate(startDate)
        setEndDate(endDate)
    }


    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });

      useEffect(() => {
        props.onUpdateProcessDates(startDate, endDate)
      }, [startDate, endDate]);

    return (
        <>
            <p>Please specify the process date range</p>
            <div style={{width: '600px', paddingTop: '20px'}}>
                <ThemeProvider theme={darkTheme}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateRangePicker']}>
                            { !startDate && !endDate && <DateRangePicker onChange={updatePeriod} localeText={{ start: 'Start Date', end: 'End Date' }} />}
                            { startDate && !endDate && <DateRangePicker defaultValue={[dayjs(startDate), null]} onChange={updatePeriod} localeText={{ start: 'Start Date', end: 'End Date' }} /> }
                            { !startDate && endDate && <DateRangePicker defaultValue={[null, dayjs(endDate)]} onChange={updatePeriod} localeText={{ start: 'Start Date', end: 'End Date' }} /> }
                            { startDate && endDate && <DateRangePicker defaultValue={[dayjs(startDate), dayjs(endDate)]} onChange={updatePeriod} localeText={{ start: 'Start Date', end: 'End Date' }} /> }
                        </DemoContainer>
                    </LocalizationProvider>
                </ThemeProvider>
            </div>
        </>
    )
}