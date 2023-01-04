import { randomNoDecimal, randomWithDecimal, convertTwoDecimal } from "./Math";
import { GridColDef } from '@mui/x-data-grid';

const init = [
    { id: 1, code: "ABC.AX", company: 'TP BANKING CORPORATION', change: '--', changePercent: '0' },
    { id: 2, code: "QWE.AX", company: 'MB BANKING CORPORATIO', change: '--', changePercent: '0' },
    { id: 3, code: "WER.AX", company: 'INTES CO.LTD', change: '--', changePercent: '0' },
    { id: 4, code: "ERT.AX", company: 'PHENIKAA GROUP', change: '--', changePercent: '0' },
    { id: 5, code: "RTY.AX", company: 'VIETTEL GROUP', change: '--', changePercent: '0' },
    { id: 6, code: "TYU.AX", company: 'VNPT TELECOM', change: '--', changePercent: '0' },
    { id: 7, code: "YUI.AX", company: 'VNPT NETWORK', change: '--', changePercent: '0' },
    { id: 8, code: "UIO.AX", company: 'VIETTEL TELECOM', change: '--', changePercent: '0' },
    { id: 9, code: "HJK.AX", company: 'VIETTEL SOFTWARE', change: '--', changePercent: '0' },
    { id: 10, code: "HGF.AX", company: 'PFT SOFTWARE', change: '--', changePercent: '0' },
    { id: 11, code: "GFD.AX", company: 'FPT TELECOM', change: '--', changePercent: '0' },
    { id: 12, code: "FDS.AX", company: 'MOBIFONE GROUP', change: '--', changePercent: '0' },
    { id: 13, code: "DFG.AX", company: 'CFI TECH', change: '--', changePercent: '0' },
    { id: 14, code: "VFG.AX", company: 'CFI TELECOM', change: '--', changePercent: '0' },
    { id: 15, code: "BHF.AX", company: 'ORANGE TELECOM', change: '--', changePercent: '0' },
    { id: 16, code: "NHJ.AX", company: 'ONESOFT', change: '--', changePercent: '0' },
    { id: 17, code: "MHJ.AX", company: 'TESLA IOT GROUP', change: '--', changePercent: '0' },
    { id: 18, code: "MJK.AX", company: 'TIKTOK ENTERTAIMENT LTD', change: '--', changePercent: '0' },
    { id: 19, code: "LKJ.AX", company: 'META ENTERTAIMENT CORPORATION', change: '--', changePercent: '0' },
    { id: 20, code: "EFV.AX", company: 'NAM DINH MEDICAL COMPANY', change: '--', changePercent: '0' },
    { id: 21, code: "RGB.AX", company: 'HA NOI MEDICAL COMPANY', change: '--', changePercent: '0' },
    { id: 22, code: "THN.AX", company: 'VIETNAM AIRLINE CORP', change: '--', changePercent: '0' },
    { id: 23, code: "YJM.AX", company: 'GARENA GAME COMPANY', change: '--', changePercent: '0' },
    { id: 24, code: "UKM.AX", company: 'ELECTRIC SPORT LTD', change: '--', changePercent: '0' },
    { id: 25, code: "IKM.AX", company: 'RIO CHAMR COMPANY', change: '--', changePercent: '0' },
    { id: 26, code: "OLM.AX", company: 'BLACK AND WHITE STUDIOS', change: '--', changePercent: '0' },
    { id: 27, code: "OLS.AX", company: 'NOTHING TO SCARE CORPORATION LTD', change: '--', changePercent: '0' },
    { id: 28, code: "AGJ.AX", company: 'CHANGE YOUR SELF CORPORATION LIMITED', change: '--', changePercent: '0' },
    { id: 29, code: "EFB.AX", company: 'LEARN AND FLY CORPORATION LIMITED', change: '--', changePercent: '0' },
    { id: 30, code: "CGY.AX", company: 'GRAB INTERNATIONAL GROUP LIMITED', change: '--', changePercent: '0' },
    { id: 31, code: "XXX.AX", company: 'AUSTRALIA INTERNATIONAL BANKING GROUP', change: '--', changePercent: '0' },
    { id: 32, code: "RTC.AX", company: 'VIETNAM FOOTBALL LTD', change: '--', changePercent: '0' },
]
export function initialRowsFunction() {
    let newR = [];
    for (let i in init) {
        const price = convertTwoDecimal(randomWithDecimal(0.01, 99.99))
        const quantity = randomNoDecimal(1000, 1000000)
        const value = Math.floor(price * quantity)
        newR.push({ ...init[i], price, quantity, value, initPrice: price })
    }
    return newR
}

export const columns: GridColDef[] = [
    { field: 'code', headerName: 'Code', flex: 1, sortable: false },
    {
        field: 'company',
        headerName: 'Company',
        flex: 3,
        sortable: false,
        filterable: false,
        headerClassName: 'header'
    },
    {
        field: 'price',
        headerName: 'Price',
        flex: 1,
        sortable: false,
        align: 'right',
        headerAlign: 'right',
        headerClassName: 'header'
    },
    {
        field: 'value',
        headerName: 'Value',
        flex: 2,
        sortable: false,
        align: 'right',
        headerAlign: 'right',
        headerClassName: 'header',
        valueFormatter: ({ value }) => `${value.toLocaleString("en-US")}`
    },
    {
        field: 'change',
        headerName: 'Change',
        flex: 1,
        sortable: false,
        headerAlign: 'right',
        align: 'right',
        headerClassName: 'header',
        valueFormatter: ({ value }) => value !== 0 ? value : '--'
    },
    {
        field: 'changePercent',
        headerName: '%Change',
        flex: 1,
        sortable: false,
        headerAlign: 'right',
        align: 'right',
        headerClassName: 'header',
        valueFormatter: ({ value }) => value !== 0 ? `${value} %` : value
    },
];