import * as crypto from "crypto";

export const getErrorMessage = (code: number, message: string) => {
  return {
    code,
    message
  }
}

export const createSignature = <T>(request: T, keyHex: string) => {
  const values = Object.values(request)
  const hmacData = values.sort().join('|')
  const hmacKey = Buffer.from(keyHex, 'hex')
  const hmacObj = crypto.createHmac('sha256', hmacKey)
  hmacObj.update(hmacData)
  return hmacObj.digest('hex')
}

export enum RESPONSE_STATUS {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}
