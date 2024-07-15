import { NextFunction, Request, Response } from "express";

import Report from "../models/report";
import ProjectError from "../helper/error";

interface ReturnResponse {
  status: "success" | "error";
  message: String;
  data: {} | [];
}

const getReport = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let report;

    if (!!req.params.reportId) {
      const reportId = req.params.reportId;
      report = await Report.findById(req.params.reportId);

      if (report?.userId.toString() != req.userId) {
        const err = new ProjectError("You are not allowed.");
        err.statusCode = 405;
        throw err;
      }
    } else {
      report = await Report.findById({ userId: req.userId });
    }

    if (!report) {
      const err = new ProjectError("Report not found.");
      err.statusCode = 404;
      throw err;
    }

    const resp = {
      status: "success",
      message: "report.",
      data: report,
    };

    res.status(200).send(resp);
  } catch (err) {
    next(err);
  }
};

export { getReport };
