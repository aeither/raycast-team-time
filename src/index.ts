import { Clipboard, environment, LaunchType, Toast, updateCommandMetadata } from "@raycast/api";

const command = async () => {
  const now = new Date();

  const losAngeles = now.toLocaleString("en-GB", { timeZone: "America/Los_Angeles", timeStyle: "short" });
  const toronto = now.toLocaleString("en-GB", { timeZone: "America/Toronto", timeStyle: "short" });
  const berlin = now.toLocaleString("en-GB", { timeZone: "Europe/Berlin", timeStyle: "short" });
  const singapore = now.toLocaleString("en-GB", { timeZone: "Asia/Singapore", timeStyle: "short" });
  const sydney = now.toLocaleString("en-GB", { timeZone: "Australia/Sydney", timeStyle: "short" });

  const subtitle = `πΊπΈ ${losAngeles}    π¨π¦ ${toronto}    π©πͺ ${berlin}    πΈπ¬ ${singapore}    π¦πΊ ${sydney}`;
  await updateCommandMetadata({ subtitle });

  if (environment.launchType === LaunchType.UserInitiated) {
    const toast = new Toast({
      style: Toast.Style.Success,
      title: "Refreshed!",
      message: subtitle,
    });
    toast.primaryAction = {
      title: "Copy to Clipboard",
      shortcut: { modifiers: ["cmd", "shift"], key: "c" },
      onAction: () => Clipboard.copy(subtitle),
    };
    await toast.show();
  }
};

export default command;
