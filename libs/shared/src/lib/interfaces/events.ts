
export interface EventItem {
    id: string,
    poster: string,
    title: string,
    date: string,
    posterShift?: number,
    producer?: string,
    cast?: string,
    category?:string,
    additionalInformation?: string,
    IMDBLink?: string;
    sinopse?: string;
    trailer?: string;
}

export type Events = EventItem[];