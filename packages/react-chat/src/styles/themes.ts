export type Theme = {
  textPrimaryColor: string;
  textSecondaryColor: string;
  bodyBackgroundColor: string;
  sectionBackgroundColor: string;
  memberNameColor: string;
  guestNameColor: string;
  iconColor: string;
  iconUserColor: string;
  iconTextColor: string;
  activeChannelBackground: string;
  notificationColor: string;
  inputColor: string;
};

export const lightTheme: Theme = {
  textPrimaryColor: "#000",
  textSecondaryColor: "#939BA1",
  bodyBackgroundColor: "#fff",
  sectionBackgroundColor: "#F6F8FA",
  memberNameColor: "#4360DF",
  guestNameColor: "#887AF9",
  iconColor: "#D37EF4",
  iconUserColor: "#717199",
  iconTextColor: "rgba(255, 255, 255, 0.7)",
  activeChannelBackground: "#E9EDF1",
  notificationColor: "#4360DF",
  inputColor: "#EEF2F5",
};

export const darkTheme: Theme = {
  textPrimaryColor: "#fff",
  textSecondaryColor: "#909090",
  bodyBackgroundColor: "#000",
  sectionBackgroundColor: "#252525",
  memberNameColor: "#88B0FF",
  guestNameColor: "#887AF9",
  iconColor: "#D37EF4",
  iconUserColor: "#717199",
  iconTextColor: "rgba(0, 0, 0, 0.7)",
  activeChannelBackground: "#2C2C2C",
  notificationColor: "#887AF9",
  inputColor: "#373737",
};

export default { lightTheme, darkTheme };
