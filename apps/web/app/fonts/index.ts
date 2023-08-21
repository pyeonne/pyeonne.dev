import localFont from "next/font/local";

export const player = localFont({
  src: "./i_am_a_player/I AM A PLAYER.otf",
  variable: "--font-player",
});

export const suite = localFont({
  src: [
    {
      path: "./suite/SUITE-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./suite/SUITE-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./suite/SUITE-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./suite/SUITE-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./suite/SUITE-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./suite/SUITE-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./suite/SUITE-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-suite",
});
