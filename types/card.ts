import { CurrencyType } from "./common";

export interface ICardRegisterReq {
  "project": string,
  "number": string,
  "expiration_month": string,
  "expiration_year": string,
  "security_code": string
}

export interface ICardResponse {
  "id": string,
  "expiresAt": string,
  "card": {
    "lastFour": string,
    "expirationMonth": string,
    "expirationYear": string
  }
}

export interface ICardProcessReq {
  "project": string,
  "card_token": string,
  "user_contact_email": string,
  "user_name": string,
  "description": string,
  "price": string,
  "currency": CurrencyType,
  "order_id": string,
  "user_phone": string,
  "result_url": string,
  "success_url": string,
  "failure_url": string,
  "ip": string,
  "user_country": string,
  "user_city": string,
  "user_address": string,
  "user_state": string,
  "user_postal_code": string,
  "user_nationality": string,
  "signature": string
}

export interface ICardProcessRes extends Pick<ICardResponse, 'card'> {
  payment_id: string,
  success: boolean,
  acs: {
    url: string
  }
}
