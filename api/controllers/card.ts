import { CardService } from "../services/card";
import { getErrorMessage, RESPONSE_STATUS } from "../../utils/common";
import { Request, Response } from '../../types/common'

export const registerCard = async (req: Request, res: Response) => {
  try {
    const newCard = await CardService.register(req.body);
    res.status(RESPONSE_STATUS.CREATED).send(newCard);
  } catch (e) {
    const { code, message } = getErrorMessage(e.response.status, e.response.data.message);
    res.status(code).send(message);
  }
};

export const processCard = async (req: Request, res: Response) => {
  try {
    const processedCard = await CardService.process(req.body);
    res.status(RESPONSE_STATUS.OK).send(processedCard);
  } catch (e) {
    const { code, message } = getErrorMessage(e.response.status, e.response.data.message);
    res.status(code).send(message);
  }
}
