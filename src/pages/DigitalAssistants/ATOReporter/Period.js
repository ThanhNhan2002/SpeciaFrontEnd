import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { ThemeProvider, createTheme } from '@mui/material/styles';


export default () => {


    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });

    return (
        <>
            <p>Please specify the period you want me to process the reports in.</p>
            <div style={{width: '600px', paddingTop: '20px'}}>
                <ThemeProvider theme={darkTheme}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateRangePicker']}>
                            <DateRangePicker localeText={{ start: 'Start Date', end: 'End Date' }} />
                        </DemoContainer>
                    </LocalizationProvider>
                </ThemeProvider>
            </div>
        </>
    )
}