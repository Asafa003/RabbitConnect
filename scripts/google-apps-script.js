/**
 * RabbitConnect Research — Google Apps Script
 *
 * Setup (once):
 * 1. Create a Google Sheet named "RabbitConnect Research".
 * 2. Rename three tabs (exact names): Waitlist | Feedback | Contact
 * 3. Put these headers in row 1 of each tab:
 *    Waitlist: Timestamp | Name | Email | Type | Location | Interest
 *    Feedback: Timestamp | User Type | Challenge | Details | Desired Feature | Pre-launch Tester
 *    Contact:  Timestamp | Name | Email | Subject | Message | Status
 * 4. Extensions → Apps Script → paste this file → Save.
 * 5. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the Web app URL into .env.local as GOOGLE_SHEETS_WEBAPP_URL
 * 7. Optional: set the same secret in Script Properties as FORM_SECRET
 *    and in .env.local as GOOGLE_SHEETS_SECRET
 */

var SHEET_NAMES = {
  waitlist: "Waitlist",
  feedback: "Feedback",
  contact: "Contact",
};

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var expected = PropertiesService.getScriptProperties().getProperty("FORM_SECRET");
    if (expected && payload.secret !== expected) {
      return json_({ ok: false, error: "Unauthorized" }, 401);
    }

    var kind = payload.kind;
    var sheetName = SHEET_NAMES[kind];
    if (!sheetName) {
      return json_({ ok: false, error: "Unknown form kind" }, 400);
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    if (!sheet) {
      return json_({ ok: false, error: "Missing sheet: " + sheetName }, 500);
    }

    var row = rowFor_(kind, payload.data || {});
    sheet.appendRow(row);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) }, 500);
  }
}

function rowFor_(kind, data) {
  var stamp = new Date();
  if (kind === "waitlist") {
    return [
      stamp,
      data.name || "",
      data.email || "",
      data.type || "",
      data.location || "",
      data.interest || "",
    ];
  }
  if (kind === "feedback") {
    return [
      stamp,
      data.userType || "",
      data.challenge || "",
      data.details || "",
      data.desiredFeature || "",
      data.preLaunchTester ? "Yes" : "No",
    ];
  }
  // contact
  return [
    stamp,
    data.name || "",
    data.email || "",
    data.subject || "",
    data.message || "",
    data.status || "New",
  ];
}

function json_(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
