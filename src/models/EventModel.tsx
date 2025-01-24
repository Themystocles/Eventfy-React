import { LocalModel } from "./LocalModel";

export interface EventModel {
    id: number;
    name: string;
    description: string;
    dateEvent: Date;
    localId: number
    local?: LocalModel
    timeEvent: string

}