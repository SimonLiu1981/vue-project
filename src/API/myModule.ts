import { GlobalValues } from "@/assets/config";

export default {

  formatName(firstName: string, lastName: string) {
    const listName = 'PRSubmissionLog';
    return new Promise((resolve, reject) => {
      $SP().list(listName, GlobalValues.SharePoint.proxyUrl).get({ json: true }).then(res => {
        resolve(res);
      })
    });

  }
}
