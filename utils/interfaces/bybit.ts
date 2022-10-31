import { ColumnItem } from "./generic";


export enum Fields {
    TransactionTime = "Transaction Time(UTC+0)",
    Leverage = "Leverage",
    FilledType = "Filled Type",
    TradingFeeRate = "Trading Fee Rate",
    FeesPaid = "Fees Paid",
    TransactionID = "Transaction ID",
    OrderTime = "Order Time(UTC+0)",
    TriggerPrice = "Trigger Price",
    CreateTime = "Create Time",
    TimeInForce = "Time In Force",
    Status = "Status",
    Contracts = "Contracts",
    OrderNo = "Order No.",
    Direction = "Direction",
    OrderType = "Order Type",
    FilledQty = "Filled Qty",
    FilledPrice = "Filled Price",
    OrderPrice = "Order Price"
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
    [Fields.OrderTime] : "Time",
    [Fields.TriggerPrice] : "Trigger Price",
    [Fields.CreateTime] : "Create Time",
    [Fields.TimeInForce] : "Time In Force",
    [Fields.Status] : "Status",
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
/*

What to do:
1) change the default name of the header to something friendlier
    You will need an object with the real name and display name
2) Filter the data that is not important for the overview
    you will need the index of the field (dynamic?)

important things to think about:
1) Some of the fields are the same for some exports

Algorithm:
Turn headers into object
find index of each header

trade history fields:
		
Transaction Time(UTC+0)	
Leverage
Filled Type		
Trading Fee Rate	
Fees Paid	
Transaction ID

order history:
	
Order Time(UTC+0)
Trigger Price	
Create Time	
Time In Force	
Status

common fields (order/trade history):

Contracts
Order No
Direction
Order Type
Filled Qty
Filled Price
Order Price

*/