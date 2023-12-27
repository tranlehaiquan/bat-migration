import dotenv from "dotenv";
dotenv.config();

import sdk from "./sdk";
import { TimesheetsQuery } from "./generated/graphql";

(async () => {
  let hasNext = true;
  let nextCursor = null;
  const timesheets: TimesheetsQuery["timesheet"]["edges"] = [];

  while (hasNext) {
    console.log(nextCursor);
    const timesheetRequest = await sdk.timesheets({
      after: nextCursor,
    });
    hasNext = timesheetRequest.data.timesheet.pageInfo.hasNextPage;
    nextCursor = timesheetRequest.data.timesheet.pageInfo.endCursor;

    timesheets.push(...timesheetRequest.data.timesheet.edges);
  }

  await Promise.all(
    timesheets.map(async (timesheet) => {
      const { UID } = timesheet.node;

      const tsResources = await sdk.timesheetRS({
        filter: `TimesheetId == '${UID}'`,
      });
      const RelatedResources =
      tsResources.data.timesheetResource.edges
      .map((edge) => edge.node.EmployeeId).filter((id) => id).join(',');

          console.log({
            UID,
            RelatedResources,
          });

      await sdk.updateTimesheet({
        input: {
          UID,
          RelatedResources,
        },
      });
    })
  );
})();
