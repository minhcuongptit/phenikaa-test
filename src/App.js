
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import { BoxCustom, GridCustom } from './components/CustomMui';
import { styleDataGrid, styleTab } from './components/Style';
import { randomNoDecimal, convertTwoDecimal } from './components/Math';
import { initialRowsFunction, columns } from './components/Table'

function App() {
  const [tab, setTab] = React.useState('gainers');
  const [rows, setRows] = React.useState(initialRowsFunction())
  const prevData = React.useRef();

  React.useEffect(() => {
    prevData.current = rows
    setTimeout(UpdateRows, 5000)
  }, [rows])

  function UpdateRows() {
    setRows(prevRows => {
      const newRows = []
      for (let i in prevRows) {
        const newPrice = prevRows[i].price + randomNoDecimal(-5, 5) / 100 * prevRows[i].price;
        const newQuantity = prevRows[i].quantity + randomNoDecimal(10, 30)
        const newValue = Math.floor(newPrice * newQuantity)
        const newChange = newPrice - prevRows[i].initPrice
        const newChangePercent = newChange / prevRows[i].initPrice * 100
        newRows.push({ ...prevRows[i], price: convertTwoDecimal(newPrice), quantity: newQuantity, value: newValue, change: convertTwoDecimal(newChange), changePercent: convertTwoDecimal(newChangePercent) })
      }
      return newRows;
    })
  }

  let RowInOrder = tab === 'gainers' ? rows.sort(function (a, b) { return b.value - a.value }).slice(0, 20) : rows.sort(function (a, b) { return a.value - b.value }).slice(0, 20)

  return (
    <Box sx={styleDataGrid}>
      <GridCustom container>
        <Grid item xs={8}>
          <Box sx={{ marginLeft: '10px', fontWeight: 'bold' }}>
            S&P/ASX
          </Box>
        </Grid>
        <Grid item xs={2} onClick={() => setTab('gainers')}>
          <BoxCustom sx={tab === 'gainers' ? styleTab : {}}>
            TOP GAINERS
          </BoxCustom>

        </Grid>
        <Grid item xs={2} onClick={() => setTab('losers')}>
          <BoxCustom sx={tab === 'losers' ? styleTab : {}}>
            TOP LOSERS
          </BoxCustom>
        </Grid>
      </GridCustom>
      <Box sx={{ position: 'absolute', mt: '40px', width: '100%', height: `calc(100vh - 40px)` }}>
        <DataGrid
          rows={RowInOrder}
          columns={columns}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
          disableColumnMenu
          hideFooter
          experimentalFeatures={{ newEditingApi: true }}
          getCellClassName={(params: GridCellParams<number>) => {
            if (params.field === 'change' || params.field === 'changePercent') {
              if (params.value > 0) {
                return 'raise';
              } else if (params.value < 0) {
                return 'reduce';
              } else {
                return ''
              }
            }
            if (params.field === 'code') {
              return 'code'
            }

            if (params.field === 'company') {
              return 'company'
            }

          }}
        />
      </Box>

    </Box>
  );
}

export default App;




