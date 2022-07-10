import { getapp } from "../services/app.service.js";

export const getResult = async (req, res, next) => {
  try {
    const result = await getapp(req.body);
    return res.status(200).json({
      status: 200,
      result: result,
      message: "問題なし",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};