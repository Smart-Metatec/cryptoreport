import { Result } from "./generic";

// Fields for TradeHistory (Spot and Derivatives)
export enum Fields {
    // Shared
    OrderType = "Order Type",
    Direction = "Direction",
    FilledPrice = "Filled Price",
    TransactionID = "Transaction ID",
    // Derivatives only
    Contracts = "Contracts",
    OrderNo = "Order No.",
    TransactionTime = "Transaction Time(UTC+0)",
    Leverage = "Leverage",
    FilledType = "Filled Type",
    FilledQty = "Filled Qty",
    OrderPrice = "Order Price",
    TradingFeeRate = "Trading Fee Rate",
    FeesPaid = "Fees Paid",
    // Spot only
    SpotPairs = "Spot Pairs",
    FilledValue = "Filled Value",
    FilledQuantity = "Filled Quantity",
    Fees = "Fees",
    TimeStamp = "TimeStamp (UTC)"
}

interface DisplayName {
    [key: string]: string
}

export const DisplayNames: DisplayName = {
    [Fields.TransactionTime] : "Time",
    [Fields.Leverage] : "Leverage",
    [Fields.FilledType] : "Filled Type",
    [Fields.TradingFeeRate] : "Trading Fee Rate",
    [Fields.FeesPaid] : "Fees Paid",
    [Fields.TransactionID] : "Transaction ID",
    [Fields.Contracts] : "Contracts",
    [Fields.OrderNo] : "Order No",
    [Fields.Direction] : "Direction",
    [Fields.OrderType] : "Order Type",
    [Fields.FilledQty] : "Filled Qty",
    [Fields.FilledPrice] : "Filled Price",
    [Fields.OrderPrice] : "Order Price"
}

export enum Directions {
    OpenLong = "Open Long",
    CloseLong = "Close Long",
    OpenShort = "Open Short",
    CloseShort = "Close Short"
}

interface TradeHistory<data> {
    [key: string]: data
}

export interface HeaderIndex {
    [key: string]: number
}

// If set to true that value will be shown
export const TradeHistory: TradeHistory<boolean> = {
    [Fields.TransactionTime]: false,
    [Fields.Leverage]: false,
    [Fields.FilledType]: false,
    [Fields.TradingFeeRate]: false,
    [Fields.FeesPaid]: true,
    [Fields.TransactionID]: false,
    [Fields.Contracts]: true,
    [Fields.OrderNo]: false,
    [Fields.Direction]: true,
    [Fields.OrderType]: false,
    [Fields.FilledQty]: true,
    [Fields.FilledPrice]: true,
    [Fields.OrderPrice]: false,
}

const getAccountType = (filename: string): Result => {

    let result = {result: false, data: "File is not bybit spot or derivative trade history"}

    const isBybit = filename.match(/bybit/gi)
    const isTradeHistory = filename.match(/trade/gi)
    const isSpot = filename.match(/spot/gi)
    const isDerivative = filename.match(/derivative/gi)

    if(!isBybit) result.data = "Not a valid Bybit file."
    if(!isTradeHistory) result.data = "File does not contain trade history."

    if(isSpot) return {result: true, data: "spot"}
    else if(isDerivative) return {result: true, data: "derivative"}

    return result

}

export const bybit = (header: string[], data: Array<string[]>, filename: string): Result => {
    const account = getAccountType(filename)

    if(!account.result) return account

    console.log("This is a bybit file")


    return {result: false, data: null}
    
}
/*

figure out what kind of bybit data it is. 

use the filename or use the data to figure out the file
*/