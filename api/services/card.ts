import { api, SECRET_KEY, PROJECT_ID } from "../../config/axios";
import { AxiosResponse } from "axios";
import { ICardProcessReq, ICardProcessRes, ICardRegisterReq, ICardResponse } from "../../types/card";
import { createSignature } from "../../utils/common";

export class CardService {
    static async register (data: Omit<ICardRegisterReq, 'project'>) {
        // write query to db
        const formattedData: ICardRegisterReq = {
            ...data,
            project: PROJECT_ID
        };

        const response: AxiosResponse<ICardResponse> = await api.post('/dev/card/getToken', formattedData);
        return response.data;
    }

    static async process (data: Omit<ICardProcessReq, 'signature' | 'project'>) {
        const templateData: Omit<ICardProcessReq, 'signature'> = {
            ...data,
            project: PROJECT_ID
        }

        const signature = createSignature<Omit<ICardProcessReq, 'signature'>>(templateData, SECRET_KEY);

        const formattedData: ICardProcessReq = {
            ...templateData,
            signature
        }

        const response: AxiosResponse<ICardProcessRes> = await api.post('/dev/card/process', formattedData);
        return response.data;
    }
}
